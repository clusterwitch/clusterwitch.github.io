# Quick Start Guide

## ✅ Project Built Successfully

Your Eleventy + Resume Tailor Tool is ready to deploy.

### What Was Created

```
✓ Eleventy config (.eleventy.js)
✓ 7 JavaScript modules for client-side processing
✓ HTML/CSS for portfolio + tool pages
✓ GitHub Actions workflow for auto-deployment
✓ Example template files (resume.json, ai_prompt.md, etc.)
✓ Comprehensive README and documentation
✓ Static site built to _site/ folder
```

### Folder Structure

```
clusterwitch.github.io/
├── src/                       # Source files
│   ├── _includes/             # Layout templates
│   ├── _data/                 # Site metadata
│   ├── assets/css/            # Styles
│   ├── js/lib/                # 7 utility modules
│   ├── pages/                 # Home, Tool, About
│   └── templates/             # Example user files
├── _site/                     # Build output (GitHub Pages)
├── .github/workflows/         # GitHub Actions
├── package.json
└── README.md
```

---

## 🚀 Local Development

### 1. Install dependencies (already done)
```bash
npm install
```

### 2. Start dev server
```bash
npm run serve
```
Visit: **http://localhost:8080**

### 3. Build for production
```bash
npm run build
```
Output: **_site/** folder (ready for GitHub Pages)

---

## 📤 Deploy to GitHub Pages

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Init: Resume Tailor Tool on Eleventy"
git push origin main
```

### Step 2: GitHub Pages Settings
- Go to repo **Settings → Pages**
- Ensure **Source** is set to `gh-pages` branch
- GitHub Actions will automatically build and deploy

### Step 3: Access your site
- Visit: `https://clusterwitch.github.io/`
- Tool is at: `/tool/`

---

## 🛠️ File Reference

### Pages
- **src/pages/index.md** → Home/portfolio page
- **src/pages/tool.njk** → Resume tailor interface
- **src/pages/about.md** → About page

### JavaScript Modules
All in `src/js/lib/`:
- **fileUpload.js** — Handle file inputs
- **pdfParser.js** — Parse PDFs with pdf.js
- **templateMerge.js** — Merge data into template
- **aiCall.js** — Call OpenAI/Anthropic API
- **markdownRender.js** — Render markdown with marked.js
- **pdfExport.js** — Export to PDF
- **tool.js** — Main orchestrator

### Example Templates
Download these from `src/templates/` and customize:
- **resume.json** — Your resume data
- **ai_prompt.md** — Instructions for AI
- **output_template.md** — Resume output format
- **example_job_desc.txt** — Sample job description

---

## 🧪 Testing the Tool Locally

Before deploying, test with example files:

1. Open: `http://localhost:8080/tool/`
2. Upload files from `src/templates/`:
   - `resume.json` (already in repo)
   - `ai_prompt.md` (customize your instructions)
   - `output_template.md` (customize your format)
   - `example_job_desc.txt` (sample job posting)
3. Enter your OpenAI or Anthropic API key
4. Click "Generate Tailored Resume"
5. Preview, edit, export as PDF or print

---

## 🔐 Privacy & Security

✅ **100% client-side**
- All file parsing happens in your browser
- No data stored on any server
- API keys only in browser memory

⚠️ **API calls only**
- Your resume + job description are sent to OpenAI/Anthropic API
- Read their privacy policies before use

---

## 💰 Cost Estimates

- **GitHub Pages**: Free (unlimited static hosting)
- **Eleventy**: Free (open source)
- **AI API**:
  - OpenAI (GPT-4): ~$0.01-0.05 per resume
  - Anthropic (Claude): Similar pricing
  - Varies by prompt length and response length

---

## 🐛 Troubleshooting

### Build Error
```bash
# Delete and rebuild
rm -r node_modules _site
npm install
npm run build
```

### CDN Libraries Not Loading
- Check browser console for 404 errors
- Verify internet connection
- Refresh page

### API Key Invalid
- Verify key is correct and has credits
- Check API provider's status page
- Ensure no extra spaces in key

### Print/Export PDF Issue
- Use browser print dialog as fallback
- Check browser console for errors
- Try different browser if issue persists

---

## 📖 Next Steps

1. **Customize portfolio**: Edit `src/pages/index.md` and `src/pages/about.md`
2. **Add images**: Put images in `src/assets/images/`
3. **Create your resume templates**: Update `src/templates/`
4. **Style the site**: Edit `src/assets/css/style.css`
5. **Deploy**: Push to GitHub; GitHub Actions handles the rest

---

## 📚 Documentation

- See **PROJECT_PLAN.md** for full architecture details
- See **README.md** for comprehensive documentation
- See **src/templates/** for example files to customize

---

**Ready to go!** 🎉

Push to GitHub and your site will be live at `https://clusterwitch.github.io/`
