# File Structure for Scholarix Study Website

## Required Files to Add to Repository

To deploy your Scholarix Study website, you need to add your website files to this directory. Here's the typical structure:

```
Final_Production-SSA/
├── index.html              # Main homepage
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── css/
│   ├── style.css          # Main stylesheet
│   ├── responsive.css     # Mobile responsive styles
│   └── bootstrap.css      # Bootstrap (if used)
├── js/
│   ├── main.js           # Main JavaScript
│   ├── contact.js        # Contact form handling
│   └── jquery.min.js     # jQuery (if used)
├── images/
│   ├── logo.png          # Site logo
│   ├── hero-bg.jpg       # Hero section background
│   ├── services/         # Service images
│   └── gallery/          # Photo gallery
├── assets/
│   ├── fonts/            # Custom fonts
│   └── icons/            # Icon files
├── pages/
│   ├── programs.html     # Study programs
│   ├── destinations.html # Study destinations
│   └── testimonials.html # Student testimonials
└── README.md             # Project documentation
```

## Next Steps

1. **Copy your website files** into this directory
2. **Ensure index.html exists** in the root (this is required)
3. **Check all links are relative** (not absolute URLs)
4. **Test locally** by opening index.html in a browser
5. **Commit and push** to GitHub
6. **Deploy to Cloudflare** using the guide in CLOUDFLARE_DEPLOYMENT.md

## Important Notes

- The main entry point must be named `index.html`
- All file paths should be relative (e.g., `./css/style.css` not `/css/style.css`)
- Images should be optimized for web (reasonable file sizes)
- Ensure all referenced files exist to avoid broken links