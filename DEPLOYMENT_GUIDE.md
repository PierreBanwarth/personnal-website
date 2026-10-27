# Deployment Guide

This guide covers deploying the Pierre Banwarth portfolio to various hosting platforms.

## Quick Comparison

| Platform | Setup Time | Cost | Best For | Difficulty |
|----------|-----------|------|----------|-----------|
| **Vercel** | 2 min | Free tier available | Next.js apps | Easiest |
| **Netlify** | 5 min | Free tier available | Static/JS sites | Easy |
| **GitHub Pages** | 10 min | Free | Open source | Easy |
| **Render** | 5 min | Free tier available | Full-stack | Easy |
| **Self-hosted** | 30 min | Varies | Full control | Hard |

---

## 🚀 Vercel (Recommended)

Vercel is made by the creators of Next.js and is the easiest option.

### Prerequisites
- GitHub account
- Code pushed to GitHub repository

### Steps

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Create Vercel account**
   - Visit https://vercel.com
   - Sign up with GitHub

3. **Import project**
   - Click "Add New Project"
   - Select your repository
   - Click "Import"

4. **Configure**
   - Framework: Next.js (auto-detected)
   - Keep defaults
   - Click "Deploy"

5. **Done!**
   - Vercel generates a URL (e.g., `my-portfolio.vercel.app`)
   - Site is live in ~2 minutes

### Custom Domain

1. Go to project settings → Domains
2. Add your domain (e.g., `pierrebanwarth.com`)
3. Follow DNS configuration steps
4. Vercel handles SSL automatically

### Updates
- Push to GitHub → Vercel auto-deploys
- Every commit triggers a new deployment

---

## 🔥 Netlify

Good alternative with generous free tier.

### Prerequisites
- GitHub account (or upload files directly)
- Code pushed to GitHub

### Steps

1. **Create Netlify account**
   - Visit https://netlify.com
   - Sign up with GitHub

2. **Connect repository**
   - Click "Add new site"
   - Choose "Connect to Git"
   - Select GitHub
   - Choose your repository

3. **Configure build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

4. **Done!**
   - Site deployed in 2-3 minutes
   - URL generated (e.g., `my-portfolio.netlify.app`)

### Custom Domain
1. Go to Domain settings
2. Add your domain
3. Update your domain's DNS
4. Netlify provides DNS instructions

### Updates
- Push to GitHub → Netlify auto-deploys
- Build logs available for debugging

---

## 🌐 GitHub Pages

Free hosting directly from GitHub.

### Prerequisites
- GitHub account
- Repository named `username.github.io` OR use branch `gh-pages`

### Steps

1. **Install next-export package**
   ```bash
   npm install --save-dev next-export
   ```

2. **Update next.config.ts**
   ```typescript
   const nextConfig = {
     output: 'export',
   };
   export default nextConfig;
   ```

3. **Build static version**
   ```bash
   npm run build
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Set source to: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/` (root)
   - Click "Save"

6. **Done!**
   - Site live at `username.github.io`
   - Or custom domain in settings

### Custom Domain
1. Settings → Pages → Custom domain
2. Enter your domain name
3. Update DNS to point to GitHub
4. GitHub handles SSL

---

## 🎯 Render

Modern platform with free tier.

### Prerequisites
- GitHub account
- Code pushed to GitHub

### Steps

1. **Create Render account**
   - Visit https://render.com
   - Sign up with GitHub

2. **Create new Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Grant access to your repo

3. **Configure**
   - Runtime: Node.js
   - Build command: `npm run build`
   - Start command: `npm run start`
   - Auto-deploy: On

4. **Deploy**
   - Click "Create Web Service"
   - Wait 3-5 minutes for build

5. **Done!**
   - URL provided (e.g., `my-portfolio.onrender.com`)
   - Auto-deploys on GitHub push

### Custom Domain
1. Settings → Custom Domain
2. Add your domain
3. Update DNS records
4. Render provides instructions

---

## 🖥️ Self-Hosted (Linux/Docker)

Full control over hosting.

### Prerequisites
- Hosting with Node.js support
- SSH access to server
- Domain/DNS access

### Option A: Direct Node.js

1. **SSH into server**
   ```bash
   ssh user@yourserver.com
   ```

2. **Install Node.js** (if not installed)
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Build**
   ```bash
   npm run build
   ```

6. **Start with PM2** (keeps running)
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "portfolio" -- run start
   pm2 startup
   pm2 save
   ```

7. **Configure reverse proxy** (using Nginx)

   Create `/etc/nginx/sites-available/portfolio`:
   ```nginx
   server {
       listen 80;
       server_name pierrebanwarth.com www.pierrebanwarth.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Set up HTTPS with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d pierrebanwarth.com -d www.pierrebanwarth.com
   ```

### Option B: Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build image**
   ```bash
   docker build -t portfolio .
   ```

3. **Run container**
   ```bash
   docker run -d -p 3000:3000 --name portfolio portfolio
   ```

4. **Configure reverse proxy** (same as above)

---

## ☁️ AWS (Amplify)

Amazon's static hosting solution.

### Steps

1. **Create AWS account**
   - Visit https://aws.amazon.com

2. **Build for static deployment**
   ```bash
   npm run build
   # Copy `.next` to `out/` folder for static export
   ```

3. **Use AWS Amplify Console**
   - Connect GitHub repo
   - Select branch to deploy
   - Amplify auto-detects Next.js
   - Configure build settings
   - Deploy

4. **Custom domain**
   - Amplify Console → Domain management
   - Add your domain
   - Configure DNS

---

## 🔧 Post-Deployment Checklist

After deploying to any platform:

### Essential
- [ ] Site loads without errors
- [ ] All pages accessible (/, /live-images, /cyanotypes, /about, /contact)
- [ ] Images display correctly
- [ ] Navigation works on mobile
- [ ] Forms work (or show appropriate message)

### Performance
- [ ] Page load time < 3 seconds
- [ ] Images load lazily
- [ ] No console errors
- [ ] Mobile viewport correct

### SEO & Social
- [ ] Title and description appear in browser tab
- [ ] Open Graph tags work (test with Twitter/Facebook)
- [ ] Favicon displays
- [ ] Instagram link works

### Security
- [ ] HTTPS enabled (green lock icon)
- [ ] No mixed content warnings
- [ ] Contact email obscured properly
- [ ] No sensitive info in code

### Analytics (Optional)
- [ ] Google Analytics set up
- [ ] Email notifications for errors
- [ ] Error tracking enabled

---

## 🐛 Deployment Troubleshooting

### Build Fails

**Error: "Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: "TypeScript compilation failed"**
- Check for red squiggles in your editor
- Verify all imports are correct
- Run `npm run build` locally first

### Site Shows Blank/Errors

**First check:**
- Is the app running? (logs visible)
- Are all environment variables set?
- Do image paths exist?

**For Vercel:**
- Check Deployment → Logs
- Look for error messages
- Verify `.env` file not tracked in Git

**For Netlify:**
- Check Deploys → Deploy log
- Look for build errors
- Verify build command correct

### Images Not Loading

- Verify files in `public/images/` exist
- Check paths use forward slashes: `/images/live/name.gif`
- Check filenames match exactly (case-sensitive)
- Verify file extensions correct

### Contact Form Not Working

Currently shows local success message only. To enable real email:
- Integrate Formspree, SendGrid, or similar
- Update `app/contact/page.tsx`
- Add API key to environment variables
- Test locally before deploying

---

## 📊 Monitoring & Updates

### Check Site Health

Vercel dashboard:
- Deployments tab → See all versions
- Analytics tab → Performance metrics
- Settings tab → Configure domain/redirects

Netlify dashboard:
- Deploys → See build history
- Analytics → Traffic and performance
- Domain management → DNS settings

### Deploy Updates

```bash
# Make changes locally
npm run dev  # Test

# Commit and push
git add .
git commit -m "Update portfolio"
git push origin main

# Platform auto-deploys (Vercel/Netlify)
# Or manually trigger if needed
```

### Rollback to Previous Version

**Vercel:**
- Deployments → Select previous version → Promote to Production

**Netlify:**
- Deploys → Find version → Publish deploy

---

## 💾 Backup Strategy

### Version Control
```bash
# Always keep code on GitHub
git add .
git commit -m "Latest updates"
git push origin main
```

### Database/Content
- Data stored in `lib/data.ts` → backed up with Git
- Images stored in `public/images/` → backed up with Git
- No external database needed

### Full Backup
```bash
# Clone entire project
git clone https://github.com/yourusername/portfolio.git portfolio-backup
```

---

## 🎯 Recommended Deployment Path

1. **Development**: `npm run dev` locally
2. **Testing**: Push to `develop` branch → preview
3. **Production**: Push to `main` → auto-deploy via Vercel/Netlify
4. **Monitoring**: Check dashboards weekly
5. **Updates**: Add content, push, auto-deploys

---

## Support & Documentation

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Netlify Docs: https://docs.netlify.com
- Render Docs: https://render.com/docs

For issues, check platform documentation first, then refer to `PORTFOLIO_README.md`.
