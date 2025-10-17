#!/bin/bash

# SCHOLARIX Production Deployment Script
# Deploys to scholarixstudy.com with cache invalidation

echo "🚀 Starting deployment to scholarixstudy.com domain..."

# Clean any existing cache
echo "🧹 Cleaning cache directories..."
rm -rf dist node_modules/.cache .wrangler/cache

# Fresh build
echo "🔨 Building project..."
npm run build

# Deploy to production
echo "📤 Deploying to scholarixstudy.com..."
wrangler pages deploy dist --project-name scholarix-study-abroad-production --commit-dirty=true

# Cache invalidation (if needed)
echo "♻️ Invalidating Cloudflare cache..."
# Note: Add your zone ID and API token for cache purging
# curl -X POST "https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/purge_cache" \
#      -H "Authorization: Bearer YOUR_API_TOKEN" \
#      -H "Content-Type: application/json" \
#      --data '{"purge_everything":true}'

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://scholarixstudy.com"
echo "⏰ Allow 5-10 minutes for global propagation"