# Pierre Banwarth Portfolio — Game Boy Camera

A professional, responsive portfolio website showcasing photographs captured with Game Boy Camera, including live concert GIFs and cyanotype prints.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Features**: Static generation, responsive design, optimized images
- **Deployment Ready**: Build artifacts ready for any static hosting

## Project Structure

```
website/
├── app/                              # Next.js App Router
│   ├── layout.tsx                   # Root layout with Header & Footer
│   ├── page.tsx                     # Homepage
│   ├── live-images/
│   │   └── page.tsx                 # Live images gallery
│   ├── cyanotypes/
│   │   └── page.tsx                 # Cyanotypes gallery
│   ├── about/
│   │   └── page.tsx                 # About page
│   ├── contact/
│   │   └── page.tsx                 # Contact form page
│   ├── not-found.tsx                # 404 error page
│   └── globals.css                  # Global styles
│
├── components/
│   ├── Header.tsx                   # Navigation header
│   └── Footer.tsx                   # Footer with links
│
├── lib/
│   └── data.ts                      # Project and work data
│
├── public/
│   ├── images/
│   │   ├── live/                    # GIF files (concert GIFs)
│   │   ├── cyanotypes/              # Cyanotype print images
│   │   └── sources/                 # Source images
│   └── [favicon, etc]
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Running the Project

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. The site will hot-reload on file changes.

### Production Build

Create a production build:

```bash
npm run build
npm run start
```

Or preview the production build:

```bash
npm run build
npm run start
```

## Adding New Works

### 1. Adding Live Images (GIFs)

**Step 1**: Place your GIF file in `public/images/live/`

Example: `public/images/live/new-concert.gif`

**Step 2**: Update `lib/data.ts` to add a new work:

```typescript
{
  id: 'live-012',
  title: 'Concert Name',
  type: 'live',
  image: '/images/live/new-concert.gif',
  date: '2025-01-15',
  location: 'Venue Name',  // Optional
  artist: 'Artist/Band Name',  // Optional
  description: 'Brief description of the image',
},
```

Add this to the `liveWorks` array in `lib/data.ts`.

**Step 3**: The gallery will automatically update.

### 2. Adding Cyanotypes

**Step 1**: Place your images:
- Main cyanotype print: `public/images/cyanotypes/my-print.png`
- Source image (optional): `public/images/sources/my-source.png`

**Step 2**: Update `lib/data.ts`:

```typescript
{
  id: 'cyan-002',
  title: 'Print Title',
  type: 'cyanotype',
  image: '/images/cyanotypes/my-print.png',
  sourceImage: '/images/sources/my-source.png',  // Optional
  date: '2025-01-15',
  technique: 'Cyanotype print on paper',
  dimensions: 'A4 (21 × 29.7 cm)',
  credits: 'Pierre Banwarth, image source. Printed by [Printer Name]',
  description: 'Description of the work and its significance',
},
```

Add this to the `cyanotypeWorks` array in `lib/data.ts`.

## Customizing the Site

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  "charcoal": "#171717",
  "warm-white": "#F1EEE6",
  "cyanotype": "#244B98",
}
```

### Text Content

- **Homepage**: Edit `app/page.tsx`
- **Live Images**: Edit `app/live-images/page.tsx`
- **Cyanotypes**: Edit `app/cyanotypes/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`

### Metadata & SEO

Update metadata in each page file. Example in `app/page.tsx`:

```typescript
export const metadata = {
  title: 'Pierre Banwarth — Photography',
  description: 'Exploring photography through Game Boy Camera...',
};
```

### Contact Email

The contact form uses a placeholder email. To make it functional, you need to:

1. Set up a backend service (e.g., Formspree, SendGrid, Resend)
2. Update the form submission in `app/contact/page.tsx`

For now, the form displays a success message locally.

## Image Specifications

### Live Images (GIFs)
- **Format**: GIF (animated)
- **Resolution**: Recommended 400px × 400px minimum
- **File size**: Keep under 2MB for optimal performance
- **Path**: `public/images/live/`

### Cyanotypes
- **Format**: PNG or JPG
- **Resolution**: Recommended 800px × 1000px+
- **Quality**: High contrast to show print detail
- **Path**: `public/images/cyanotypes/`

### Source Images
- **Format**: PNG or JPG
- **Resolution**: Match the corresponding print
- **Path**: `public/images/sources/`

## Responsive Design

The site is fully responsive:
- **Desktop**: Full navigation, multi-column grids
- **Tablet**: Adaptive layouts, readable text
- **Mobile**: Single column, touch-friendly buttons, hamburger menu

All images scale responsively using CSS.

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Color contrast meets WCAG standards
- Keyboard navigation supported
- Focus indicators visible
- Reduced motion preference respected

## SEO & Meta Tags

- Open Graph tags for social sharing
- Unique meta descriptions per page
- Semantic heading hierarchy
- Image alt text and titles
- Favicon with branding colors

## Deployment

### Static Hosting (Vercel, Netlify, GitHub Pages)

The site is optimized for static hosting:

```bash
npm run build
# Deploy the `.next/static` and `public/` directories
```

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect the repository to Vercel
3. Vercel will auto-detect Next.js and deploy

### Netlify

1. Build locally: `npm run build`
2. Deploy the `.next` folder as static content

### Self-Hosted

1. Build: `npm run build`
2. Run: `npm run start`
3. Run on your server (requires Node.js)

## Performance Optimizations

- ✅ Next.js Image Optimization
- ✅ Static generation for fast load times
- ✅ Lazy loading for images below the fold
- ✅ Minimal CSS with Tailwind
- ✅ No external dependencies beyond Next.js
- ✅ Gzip compression

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Showing

1. Verify image path matches `public/images/` structure
2. Check file format is supported (GIF, PNG, JPG)
3. Ensure filename doesn't have special characters

### Styling Issues

1. Rebuild Tailwind: `npm run build`
2. Check `tailwind.config.ts` for custom colors
3. Verify CSS classes are properly imported

## Development Tips

### Adding New Pages

1. Create a folder in `app/` (e.g., `app/portfolio/`)
2. Create `page.tsx` in that folder
3. Header navigation will need manual updates
4. Add metadata for SEO

### Updating Navigation

Edit `components/Header.tsx` to add/remove menu items.

### Testing Responsive Design

1. Use browser DevTools (F12)
2. Toggle device toolbar (mobile view)
3. Test on actual devices

## Future Enhancements

- Admin dashboard for managing works
- Image upload system
- Search functionality
- Instagram feed integration
- Contact form backend integration
- Dark mode toggle
- Multi-language support
- Blog or news section

## License

© 2026 Pierre Banwarth. All photographs are copyrighted.

## Questions or Issues?

For technical questions or issues with the site:
- Check the troubleshooting section above
- Review the code comments
- Consult Next.js documentation: https://nextjs.org/docs
