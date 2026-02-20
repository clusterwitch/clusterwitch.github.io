# DEPLOY TO GITHUB PAGES — Final Instructions

## Your Project is Complete ✅

Everything is built and tested. Follow these steps to deploy your live site.

---

## Step 1: Initialize Git (if not already done)

```bash
cd clusterwitch.github.io

# Initialize repo
git init

# Add GitHub remote
git remote add origin https://github.com/clusterwitch/clusterwitch.github.io.git

# Or if already initialized, verify:
git remote -v
# Should show: origin  https://github.com/clusterwitch/clusterwitch.github.io.git
```

---

## Step 2: Stash Your Work (if needed)

If you have uncommitted changes from earlier:
```bash
git add .
git commit -m "WIP: Resume Tailor Tool setup"
```

---

## Step 3: Set Default Branch to `main`

```bash
git branch -M main
```

---

## Step 4: Push to GitHub

```bash
git push -u origin main
```

This will:
1. Push all files to the `main` branch
2. Trigger GitHub Actions workflow (`.github/workflows/deploy.yml`)
3. Automatically build the site with Eleventy
4. Deploy to `gh-pages` branch
5. site goes live within 2-3 minutes

---

## Step 5: Configure GitHub Pages (if needed)

1. Go to: **https://github.com/clusterwitch/clusterwitch.github.io/settings/pages**
2. Under "Build and deployment":
   - **Source:** Select `Deploy from a branch`
   - **Branch:** Select `gh-pages` (should auto-appear after first deployment)
   - **Folder:** Select `/ (root)` (default)
3. Click **Save**

---

## Step 6: Verify Deployment

Wait 2-3 minutes, then:

1. Visit: **https://clusterwitch.github.io/**
2. Check these pages:
   - Home (portfolio): `https://clusterwitch.github.io/`
   - Resume Tool: `https://clusterwitch.github.io/tool/`
   - About: `https://clusterwitch.github.io/about/`

3. Check GitHub Actions log:
   - Go to: **Actions** tab in your repo
   - Click the latest workflow run
   - Verify "Build and Deploy" passed ✅

---

## Step 7: Test the Tool

1. Open: `https://clusterwitch.github.io/tool/`
2. Upload example files from `src/templates/`:
   - Download `resume.json` from your repo
   - Download `ai_prompt.md` from your repo
   - Download `output_template.md` from your repo
   - Download `example_job_desc.txt` from your repo
3. Enter your OpenAI or Anthropic API key
4. Click "Generate Tailored Resume"
5. Verify the preview and export work

---

## Subsequent Updates

Any time you want to update your site:

```bash
# Make changes to files in src/

# Build locally to verify
npm run build

# Stage and commit
git add .
git commit -m "Update: [description of change]"

# Push to GitHub
git push origin main

# GitHub Actions automatically deploys
# Site updates within 2-3 minutes
```

---

## What the GitHub Actions Workflow Does

File: `.github/workflows/deploy.yml`

When you push to `main`:
1. ✅ Checks out your repository
2. ✅ Sets up Node.js v18
3. ✅ Runs `npm install` (installs Eleventy)
4. ✅ Runs `npm run build` (generates static site to `_site/`)
5. ✅ Deploys `_site/` to `gh-pages` branch
6. ✅ GitHub Pages serves your site

**No manual deployment needed** — it's automatic! 🚀

---

## Troubleshooting Deployment

### "Build failed" in GitHub Actions

1. Check the Actions log for error message
2. Common fixes:
   - Verify `src/` files exist
   - Check `package.json` has `"@11ty/eleventy"` dependency
   - Verify `.eleventy.js` is valid
3. Fix locally: `npm run build`
4. Commit fix and push again

### Site shows old content

- GitHub caches aggressively
- Hard refresh: `Ctrl+Shift+R` (Cmd+Shift+R on Mac)
- Or clear browser cache
- Check that action completed ✅

### Pages not found (404)

- Verify pages exist in `src/pages/`
- Verify Build completed successfully
- Check URL matches your GitHub username
- Example: `https://clusterwitch.github.io/` (case-sensitive for some systems)

### Custom domain (optional)

If you own a domain:
1. Settings → Pages → Custom domain
2. Enter your domain (e.g., `resumetailor.com`)
3. Update DNS records as instructed
4. GitHub verifies and enables HTTPS

---

## File Checklist Before Pushing

Verify these files exist:

```
✓ .github/workflows/deploy.yml     # Auto-deployment
✓ .eleventy.js                     # Eleventy config
✓ package.json                     # Dependencies
✓ src/_includes/layout.njk         # Main template
✓ src/pages/index.md               # Home page
✓ src/pages/tool.njk               # Tool interface
✓ src/pages/about.md               # About page
✓ src/js/lib/*.js                  # 7 JS modules
✓ src/assets/css/style.css         # Styles
✓ src/templates/*.json|.md|.txt    # Example files
✓ README.md                        # Documentation
✓ PROJECT_PLAN.md                  # Architecture
✓ QUICKSTART.md                    # Quick start
```

---

## Live Site Structure

After deployment, your live site will serve:

```
https://clusterwitch.github.io/
├── /                             → Home (index.html)
├── /tool/                        → Resume Tailor
├── /about/                       → About page
├── /assets/css/style.css        → Styles
├── /assets/images/              → Your images
└── /templates/                  → Example files
```

---

## Post-Deployment Customization

After your site is live, you can:

1. **Update portfolio content**: Edit `src/pages/index.md` → commit → push
2. **Add images**: Place in `src/assets/images/` → commit → push
3. **Modify CSS**: Edit `src/assets/css/style.css` → commit → push
4. **Update templates**: Edit `src/templates/*.md` → commit → push
5. **Add pages**: New `.md` files in `src/pages/` → commit → push

Each push triggers auto-rebuild and deployment. Site updates within 2-3 minutes. ✅

---

## Cost Summary

| Service | Cost | Notes |
|---------|------|-------|
| GitHub Pages | FREE | Unlimited static hosting |
| Eleventy | FREE | Open source |
| PDF.js, marked.js | FREE | CDN libraries |
| OpenAI API | $0.01-0.05/resume | Pay-as-you-go |
| Anthropic API | $0.01-0.05/resume | Pay-as-you-go |
| **Total** | **~FREE** | + AI API usage |

---

## Security Reminders

✅ **Safe things:**
- API keys only in browser memory
- No data stored on our servers
- No cookies or tracking
- GitHub Pages is secure (HTTPS)

⚠️ **Be careful about:**
- Don't commit API keys to GitHub
- Don't share `.env` files
- Test with dummy data first
- Review AI provider privacy policies

---

## Support & Questions

If deployment fails:
1. Check GitHub Actions log for error
2. Review this file for common issues
3. Check README.md for troubleshooting
4. Check PROJECT_PLAN.md for architecture help

---

## Summary

```
Your project is ready to go live! 🚀

1. git push origin main
   ↓
2. GitHub Actions auto-builds
   ↓
3. Site deployed to gh-pages
   ↓
4. Visit https://clusterwitch.github.io/
   ↓
5. Share the tool! 📤
```

That's it! Your AI resume tailor is live. Happy job hunting! 🎉

---

**Next command:**
```bash
git push origin main
```

Then wait 2-3 minutes and visit your live site! ✨
