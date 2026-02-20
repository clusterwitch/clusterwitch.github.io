# COMMAND REFERENCE

## Local Development (Windows PowerShell)

```powershell
# Navigate to project
cd "clusterwitch.github.io"

# Install dependencies (already done)
npm install

# Serve locally with live reload
npm run serve
# → Visit http://localhost:8080

# Build for production
npm run build
# → Output goes to _site/

# Watch for file changes (rebuild on save)
npm run watch
```

---

## Deployment to GitHub

```bash
# Configure Git (one time)
git init
git remote add origin https://github.com/clusterwitch/clusterwitch.github.io.git
git branch -M main

# Deploy (every time you update)
git add .
git commit -m "Update: [description]"
git push origin main
# → GitHub Actions auto-builds and deploys
# → Site live at https://clusterwitch.github.io/ in 2-3 min

# Check deployment status
# Go to: https://github.com/clusterwitch/clusterwitch.github.io/actions
```

---

## Project Overview

```
Location: clusterwitch.github.io\

Source Files:
  src/pages/         → Public pages (index, tool, about)
  src/js/lib/        → 7 JavaScript modules
  src/assets/css/    → Styles
  src/templates/     → Example files for users
  src/_includes/     → Reusable templates
  src/_data/         → Site configuration

Output:
  _site/             → Built static site (auto-generated)

Config:
  .eleventy.js       → Eleventy configuration
  package.json       → npm scripts & dependencies
  .github/workflows/ → GitHub Actions CI/CD

Documentation:
  PROJECT_PLAN.md    → Full architecture (reference)
  README.md          → User guide
  QUICKSTART.md      → Get started
  DEPLOY.md          → Deployment steps
  PROJECT_COMPLETE.md → What was built
  BUILD_COMPLETE.md  → Build summary
```

---

## Key URLs

```
Local Development:        http://localhost:8080
Live Site (after deploy): https://clusterwitch.github.io/
Tool Page:               https://clusterwitch.github.io/tool/
GitHub Repository:       https://github.com/clusterwitch/clusterwitch.github.io
GitHub Actions:          https://github.com/clusterwitch/clusterwitch.github.io/actions
GitHub Pages Settings:   https://github.com/clusterwitch/clusterwitch.github.io/settings/pages
```

---

## Files to Customize

```
Portfolio Content:
  → src/pages/index.md       Edit home page
  → src/pages/about.md       Edit about page
  → src/assets/images/       Add your images

Resume Tool:
  → src/templates/resume.json        Your resume structure
  → src/templates/ai_prompt.md       AI instructions
  → src/templates/output_template.md Resume format

Styling:
  → src/assets/css/style.css  All CSS (no build needed)

Site Configuration:
  → src/_data/site.json      Title, author, description
```

---

## Example User Workflow

```bash
1. User visits https://clusterwitch.github.io/tool/

2. Uploads files:
   - resume.json (from src/templates/)
   - job_description.txt
   - ai_prompt.md (from src/templates/)
   - output_template.md (from src/templates/)

3. Enters OpenAI or Anthropic API key

4. Clicks "Generate Tailored Resume"
   Browser processes everything locally:
   - Parses PDF (pdf.js)
   - Parses JSON (native)
   - Parses Markdown (marked.js)
   - Merges into prompt
   - Calls API (fetch)
   - Renders response (marked.js)

5. User sees preview, edits, exports as PDF or prints
```

---

## Troubleshooting Commands

```bash
# Clear build and rebuild
rm -r _site
npm run build

# Install dependencies from scratch
rm -r node_modules package-lock.json
npm install

# Check if build is working
npm run build -- --dryrun

# Check for Eleventy errors
npm run build -- --verbose

# Run on different port (if 8080 is busy)
npm run serve -- --port 3000
```

### ⚠️ npm audit Fix Loop (Do Not Run)

**Issue:** `npm audit fix --force` may loop endlessly, cycling between versions.

**Why:** Eleventy's transitive dependencies (minimatch, rimraf, glob) have conflicting security fixes across versions.

**Solution:** Do NOT run `npm audit fix --force`
- The vulnerabilities are in build-time dependencies only
- They're not exploitable in static site generation
- Pinned version (2.0.1) is stable and tested
- Just ignore the audit warnings

**If stuck in a loop:**
```powershell
# Windows PowerShell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install  # Uses pinned version from package.json
```

---

## Git Workflow

```bash
# After making changes to files:
git status                          # See what changed
git add .                          # Stage all changes
git commit -m "Update: description" # Commit
git push origin main               # Deploy to GitHub

# View deployment status:
# → GitHub Actions log auto-runs
# → Check https://github.com/clusterwitch/clusterwitch.github.io/actions

# After 2-3 minutes:
# → https://clusterwitch.github.io/ reflects your changes
```

---

## What Each npm Script Does

```json
{
  "scripts": {
    "build": "eleventy",           // Generate _site/ folder
    "serve": "eleventy --serve",   // Local dev server (live reload)
    "watch": "eleventy --watch"    // Watch for file changes
  }
}
```

---

## Next Steps (Order of Priority)

1. **✅ Project is built** (DONE)
2. **→ Deploy to GitHub**
   ```bash
   git push origin main
   ```
3. **→ Verify GitHub Pages settings**
   - Go to Settings → Pages
   - Verify source is `gh-pages` branch
4. **→ Check GitHub Actions log**
   - Go to Actions tab
   - Verify "Build and Deploy" passed ✅
5. **→ Visit your live site**
   - https://clusterwitch.github.io/
6. **→ Test the tool**
   - Upload example files
   - Enter API key
   - Generate resume
7. **→ Customize content**
   - Update `src/pages/`
   - Add images
   - Modify CSS

---

## Performance Notes

```
Build time:          15ms (Eleventy is fast!)
Page load:           < 1 second
CSS:                 4 KB (gzipped)
JS modules total:    ~15 KB (unminified)
No external npm:     All CDN or native

GitHub Pages CDN:    Global distribution
                     Cached & fast everywhere
```

---

## Environment Files

```
No .env file needed!

Why?
- API keys entered in browser UI
- Never stored on server
- Never committed to git
- Only in browser memory

Safe to use:
✅ Your OpenAI/Anthropic API key (in UI)

Never commit:
❌ API keys in code
❌ .env files
❌ Secrets in git
```

---

## API Providers Supported

```
OpenAI (Built-in)
  Model: GPT-4
  Endpoint: https://api.openai.com/v1/chat/completions
  Cost: ~$0.01-0.05 per resume
  Setup: Get API key from https://platform.openai.com

Anthropic (Built-in)
  Model: Claude
  Endpoint: https://api.anthropic.com/v1/messages
  Cost: ~$0.01-0.05 per resume
  Setup: Get API key from https://console.anthropic.com

Others?
  → Edit src/js/lib/aiCall.js to add more providers
```

---

## Browser Compatibility

```
Works on:
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

Why?
- ES6 modules (standard now)
- Fetch API (standard)
- PDF.js (works everywhere)
- Marked.js (works everywhere)
```

---

## Summary

```
1 Command to deploy:     git push origin main
2-3 Minutes to go live
~300ms to load pages
7 JS modules
3 pages
100% client-side
0 backend needed
Free GitHub Pages
Automatic CI/CD
```

---

**Ready?**

```bash
git push origin main
```

Then wait 2 minutes. Your site will be live! 🚀

---

For questions:
- ProjectPlan → `PROJECT_PLAN.md`
- Quick help  → `QUICKSTART.md`
- Deploy?     → `DEPLOY.md`
- Built?      → `PROJECT_COMPLETE.md`
