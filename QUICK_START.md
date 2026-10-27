# Quick Start Guide

## Running the Site

### Development
```bash
npm run dev
```
Open http://localhost:3000

### Production Build
```bash
npm run build
npm run start
```

## File Organization

```
public/images/
  live/          ← GIFs from concerts (14 files included)
  cyanotypes/    ← Cyanotype prints
  sources/       ← Source images for prints
```

## Adding Content

### New Live Image (GIF)
1. Add file to `public/images/live/my-image.gif`
2. Edit `lib/data.ts` → add to `liveWorks` array:
   ```typescript
   {
     id: 'live-XXX',
     title: 'Title',
     type: 'live',
     image: '/images/live/my-image.gif',
     date: '2025-01-15',
     description: 'Description',
   }
   ```

### New Cyanotype Print
1. Add print image to `public/images/cyanotypes/`
2. Optionally add source image to `public/images/sources/`
3. Edit `lib/data.ts` → add to `cyanotypeWorks` array:
   ```typescript
   {
     id: 'cyan-XXX',
     title: 'Title',
     type: 'cyanotype',
     image: '/images/cyanotypes/print.png',
     sourceImage: '/images/sources/source.png',  // optional
     date: '2025-01-15',
     technique: 'Cyanotype print on paper',
     dimensions: 'A4',
     credits: 'Credits here',
     description: 'Description',
   }
   ```

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Text**: Edit the `.tsx` files in `app/`
- **Email**: Update contact email in `components/Footer.tsx`

## Deployment

- **Vercel**: Connect GitHub repo → auto-deploy
- **Netlify**: Upload `.next` folder
- **Static**: Run `npm run build`, serve `.next/static` + `public/` folders

## Current Images

14 GIFs ready to use in `public/images/live/`:
- Benoit.gif
- camille_philipe.gif
- concertina_1.gif
- danseur.gif
- Ghita.gif
- jean-sabot.gif
- pipou.gif, pipou1.gif
- rémi.gif
- Sophie.gif
- tom.gif
- (+ 3 additional GIFs)

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage |
| `app/live-images/page.tsx` | Gallery of GIFs |
| `app/cyanotypes/page.tsx` | Gallery of prints |
| `app/about/page.tsx` | About text |
| `app/contact/page.tsx` | Contact form |
| `lib/data.ts` | All image metadata |
| `components/Header.tsx` | Navigation |
| `components/Footer.tsx` | Footer & contact info |
| `tailwind.config.ts` | Colors & theme |

## Troubleshooting

**Images not showing?**
- Check path matches `public/images/` structure
- Verify filename (case-sensitive on Linux/Mac)
- Ensure format is GIF, PNG, or JPG

**Build failing?**
```bash
rm -rf .next
npm run build
```

**Color issues?**
- Edit `tailwind.config.ts`
- Rebuild: `npm run build`

---

For detailed info, see `PORTFOLIO_README.md`
