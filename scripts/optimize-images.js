import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  console.log('🖼️  Starting SCHOLARIX image optimization...');
  console.log('⏱️  This may take a few minutes for best quality results...\n');
  
  const imageDir = path.join(__dirname, '..', 'public', 'static', 'images');
  
  try {
    // Check if images directory exists
    await fs.access(imageDir);
  } catch {
    console.log('📁 Creating images directory...');
    await fs.mkdir(imageDir, { recursive: true });
  }
  
  const images = await glob(`${imageDir}/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}`);
  
  if (images.length === 0) {
    console.log('📷 No images found to optimize in:', imageDir);
    console.log('💡 Place your images in public/static/images/ and run again');
    return;
  }
  
  console.log(`📸 Found ${images.length} images to optimize...\n`);
  
  let totalSaved = 0;
  let processed = 0;
  
  for (const imagePath of images) {
    const { name, dir, ext } = path.parse(imagePath);
    const originalStats = await fs.stat(imagePath);
    const originalSize = originalStats.size;
    
    console.log(`🔄 Processing: ${name}${ext} (${(originalSize / 1024).toFixed(1)}KB)`);
    
    try {
      let webpSize = 0;
      let avifSize = 0;
      
      // Generate WebP version (excellent browser support)
      const webpPath = `${dir}/${name}.webp`;
      await sharp(imagePath)
        .webp({ 
          quality: 85, 
          effort: 6,
          nearLossless: name.includes('logo') // Use near-lossless for logos
        })
        .toFile(webpPath);
      
      const webpStats = await fs.stat(webpPath);
      webpSize = webpStats.size;
      
      // Generate AVIF version (next-gen format)
      const avifPath = `${dir}/${name}.avif`;
      await sharp(imagePath)
        .avif({ 
          quality: 80, 
          effort: 9,
          lossless: name.includes('logo') // Use lossless for logos
        })
        .toFile(avifPath);
        
      const avifStats = await fs.stat(avifPath);
      avifSize = avifStats.size;
      
      // Generate responsive sizes for hero/banner images
      if (name.toLowerCase().includes('hero') || name.toLowerCase().includes('banner')) {
        console.log(`   📐 Generating responsive sizes for ${name}...`);
        const sizes = [480, 768, 1024, 1536, 1920];
        
        for (const size of sizes) {
          // WebP responsive
          await sharp(imagePath)
            .resize(size, null, { 
              withoutEnlargement: true,
              fastShrinkOnLoad: false
            })
            .webp({ quality: 85, effort: 6 })
            .toFile(`${dir}/${name}-${size}.webp`);
            
          // AVIF responsive  
          await sharp(imagePath)
            .resize(size, null, { 
              withoutEnlargement: true,
              fastShrinkOnLoad: false
            })
            .avif({ quality: 80, effort: 9 })
            .toFile(`${dir}/${name}-${size}.avif`);
        }
      }
      
      // Calculate savings
      const savings = originalSize - Math.min(webpSize, avifSize);
      totalSaved += savings;
      processed++;
      
      console.log(`   ✅ WebP: ${(webpSize / 1024).toFixed(1)}KB | AVIF: ${(avifSize / 1024).toFixed(1)}KB`);
      console.log(`   💾 Saved: ${(savings / 1024).toFixed(1)}KB (${((savings / originalSize) * 100).toFixed(1)}%)\n`);
      
    } catch (error) {
      console.error(`   ❌ Failed to optimize ${name}:`, error.message);
      console.log('');
    }
  }
  
  console.log('🎉 OPTIMIZATION COMPLETE!');
  console.log(`📊 Processed: ${processed}/${images.length} images`);
  console.log(`💾 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📈 Average savings: ${processed > 0 ? ((totalSaved / processed / 1024).toFixed(1)) : 0}KB per image`);
  
  console.log('\n📝 NEXT STEPS:');
  console.log('1. Update your HTML to use the new WebP/AVIF images');
  console.log('2. Implement the responsive image code from IMPLEMENTATION_GUIDE.md');
  console.log('3. Test your site to ensure images load correctly');
  console.log('4. Run "npm run audit:performance" to see the improvements');
  
  return {
    processed,
    totalImages: images.length,
    totalSaved: totalSaved / 1024 / 1024, // MB
    averageSavings: processed > 0 ? totalSaved / processed / 1024 : 0 // KB
  };
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeImages()
    .then((results) => {
      if (results) {
        console.log('\n✨ Ready to boost your site performance!');
        process.exit(0);
      }
    })
    .catch(error => {
      console.error('\n❌ Image optimization failed:', error.message);
      console.log('\n🔧 TROUBLESHOOTING:');
      console.log('1. Ensure you have images in public/static/images/');
      console.log('2. Run "npm install sharp glob" if packages are missing');
      console.log('3. Check file permissions on the images directory');
      process.exit(1);
    });
}

export { optimizeImages };