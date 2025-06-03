# UXCraft Studio

Professional Video Editing & Post-Production Services

🌐 **Live Site**: [https://uxcraftstudio.com](https://uxcraftstudio.com)

## 🚀 CI/CD Workflow & Deployment

This project uses a fully automated GitHub Pages deployment workflow that ensures seamless updates from development to production.

### 📋 Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: GitHub Pages with Custom Domain
- **CI/CD**: GitHub Actions

---

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/your-username/UXCraft-Studio.git
cd UXCraft-Studio

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server runs at `http://localhost:8080`

### Important Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  base: '/UXCraft-Studio/', // Essential for GitHub Pages compatibility
  // ... other config
});
```

---

## 🚀 Deployment Process

### 1. Development Phase (Local)
- Code locally using Vite + React
- Test changes on `http://localhost:8080`
- Ensure `npm run build` works without errors

### 2. Push to GitHub (JawadDev Branch)
```bash
git add .
git commit -m "Your update message"
git push origin JawadDev
```

### 3. Automated CI/CD (GitHub Actions)
When you push to the `JawadDev` branch, GitHub Actions automatically:

✅ **Triggers** the deployment workflow  
✅ **Installs** dependencies (`npm ci`)  
✅ **Builds** production version (`npm run build`)  
✅ **Deploys** to `gh-pages` branch  
✅ **Updates** live site at [uxcraftstudio.com](https://uxcraftstudio.com)

### 4. Live Site Update
- Changes go live within **1-2 minutes**
- Automatic HTTPS enforcement
- Custom domain mapping via CNAME

---

## ⚙️ GitHub Actions Workflow

The `.github/workflows/deploy.yml` file handles:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [JawadDev]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: uxcraftstudio.com
          enable_jekyll: false
          force_orphan: true
          keep_files: false
```

---

## 🌍 Infrastructure Overview

| Component | Purpose |
|-----------|---------|
| **Vite** | Builds static website (`dist/` folder) |
| **GitHub Actions** | Automates build and deployment |
| **peaceiris/actions-gh-pages** | Publishes to `gh-pages` branch |
| **GitHub Pages** | Hosts site from `gh-pages` branch |
| **CNAME** | Maps custom domain to GitHub-hosted site |
| **DNS** | Points `uxcraftstudio.com` to GitHub Pages |

---

## 📝 Development Workflow

### Daily Development
1. **Edit** code locally
2. **Test** changes with `npm run dev`
3. **Commit** and **push** to `JawadDev` branch
4. **Verify** deployment success (1-2 minutes)

### Branch Structure
- `JawadDev` - Main development branch (triggers deployments)
- `gh-pages` - Auto-managed deployment branch (⚠️ **DO NOT EDIT MANUALLY**)

---

## ✅ Best Practices

### Before Pushing
- ✅ Ensure `npm run build` works locally
- ✅ Test responsive design on multiple devices
- ✅ Verify all links and assets work correctly
- ✅ Check console for any errors

### Branch Protection
- 🚫 Don't manually edit the `gh-pages` branch
- ✅ All changes should go through `JawadDev` branch
- ✅ Consider setting up branch protection rules

---

## 🛠 Future Enhancements

### Potential Improvements
- [ ] **Preview Deployments** from pull requests
- [ ] **Release Tagging** and versioning
- [ ] **Performance Monitoring** integration
- [ ] **SEO Optimization** automation
- [ ] **Multiple Environment** support (staging/production)

### Advanced Features
- [ ] **Blog System** with markdown support
- [ ] **CMS Integration** for content management
- [ ] **Analytics Dashboard** integration
- [ ] **A/B Testing** capabilities

---

## 📞 Contact & Support

**UXCraft Studio**  
📧 Email: [uxcraftstudio936@gmail.com](mailto:uxcraftstudio936@gmail.com)  
💬 WhatsApp: [+8801986483724](https://wa.me/+8801986483724)

---

## 📄 License

This project is proprietary to UXCraft Studio. All rights reserved.

---

### 🔄 Quick Reference

**Deploy New Changes:**
```bash
git add .
git commit -m "Update: your changes"
git push origin JawadDev
```

**Check Deployment Status:**
- Visit [GitHub Actions](https://github.com/your-username/UXCraft-Studio/actions)
- Monitor workflow progress
- Verify live site updates

**Rollback if Needed:**
- Revert commit in `JawadDev` branch
- Push changes to trigger new deployment

---


