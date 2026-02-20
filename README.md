# Resume Tailor Tool

A static site built with **Eleventy (11ty)** deployed on **GitHub Pages**, featuring an **AI-powered resume tailoring tool** that runs entirely client-side.

## Features

- 📄 **Portfolio Pages** — Static pages for your work and projects
- 🤖 **Resume Tailor** — Upload your resume (JSON) and job description (PDF/text); AI tailors it for you
- 🔐 **100% Client-Side** — No backend server, no data stored, privacy-first
- 📝 **Markdown Support** — Input/output templates in Markdown
- 💾 **Browser-Based PDF** — Export tailored resume as PDF using your browser
- ⚡ **No Build Step** — Vanilla JavaScript modules, no bundling
- 🚀 **GitHub Pages Ready** — Automatic deployment with GitHub Actions

## Tech Stack

- **Eleventy (11ty)** — Static site generator
- **Nunjucks** — Template engine
- **Vanilla JavaScript (ES6 modules)** — No frameworks
- **PDF.js** — Client-side PDF parsing
- **Marked.js** — Markdown rendering
- **OpenAI / Anthropic API** — AI-powered resume tailoring
- **GitHub Pages** — Free static hosting

## Project Structure

```
clusterwitch.github.io/
├── .eleventy.js               # Eleventy config
├── .github/workflows/
│   └── deploy.yml             # GitHub Pages deployment
├── src/
│   ├── _includes/             # Layout components
│   ├── _data/                 # Site data
│   ├── assets/                # CSS, images
│   ├── js/                    # Client-side app
│   ├── pages/                 # Home, Tool, About pages
│   └── templates/             # Example user templates
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- OpenAI or Anthropic API key (for the tool to work)

### Local Development

```bash
# Clone the repository
git clone https://github.com/clusterwitch/clusterwitch.github.io.git
cd clusterwitch.github.io

# Install dependencies
npm install

# Serve locally with live reload
npm run serve

# Build for production
npm run build

# Watch for changes
npm run watch
```

Visit `http://localhost:8080` in your browser.

### Using the Resume Tailor Tool

1. **Prepare your files:**
   - `resume.json` — Your resume in JSON format
   - `job_description.txt` or `.pdf` — The job posting
   - `output_template.md` — Markdown template for the output (e.g., resume format)
   - `ai_prompt.md` — Instructions for the AI (e.g., "Tailor this resume to match the job")

2. **Upload files to the tool:**
   - Visit `/tool/` page
   - Upload each file
   - Enter your OpenAI or Anthropic API key

3. **Generate tailored resume:**
   - Click "Generate Tailored Resume"
   - AI processes everything on your browser
   - Preview the result, edit directly in the browser
   - Copy to clipboard or export as PDF

## Example Files

### resume.json

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1-555-0123",
  "skills": ["JavaScript", "React", "Python"],
  "experience": [
    {
      "title": "Senior Engineer",
      "company": "Acme Corp",
      "duration": "2021-Present",
      "description": "Led team of 5 engineers..."
    }
  ]
}
```

### ai_prompt.md

```markdown
You are an expert resume writer. Tailor the resume below to match the job description.

Job Description:
{{job_description}}

Resume Data:
{{resume}}

Output Template Requirements:
{{output_template}}

Create a tailored resume that:
1. Highlights relevant skills
2. Reorders bullet points by relevance
3. Uses keywords from the job description
4. Maintains professional formatting

Return the final resume in Markdown format.
```

### output_template.md

```markdown
# {{name}}

{{email}} | {{phone}}

## Professional Summary

[1-2 sentences highlighting key strengths relevant to the role]

## Experience

[Reorder by relevance; emphasize achievements matching job requirements]

## Skills

[Prioritize skills mentioned in job description]

## Education

[Degree, school, year]
```

## Example Job Description

Upload as `.txt` or `.pdf` from LinkedIn, Indeed, or anywhere else. The tool extracts text and passes it to the AI.

## Deployment

The site automatically deploys to GitHub Pages on every push to the `main` branch.

1. **Push to main:**
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

2. **GitHub Actions:**
   - Automatically runs `npm run build`
   - Deploys `_site/` to `gh-pages` branch
   - Site is live at `https://clusterwitch.github.io/`

3. **GitHub Pages Settings:**
   - Go to repository **Settings → Pages**
   - Verify **Source** is set to `gh-pages` branch

## Privacy & Security

✅ **All file processing is local to your browser**
✅ **API keys are stored in browser memory only (never logged or sent to our server)**
✅ **No data is stored; no cookies, no tracking**
⚠️ **Your prompt + resume is sent to OpenAI or Anthropic to generate the tailored output** (this is necessary for AI to work)

For sensitive roles, review API provider privacy policies:
- [OpenAI Privacy Policy](https://openai.com/privacy/)
- [Anthropic Privacy Policy](https://www.anthropic.com/privacy)

## Hosting & Cost

- **GitHub Pages** — Free, unlimited static hosting
- **Eleventy** — Free, open source
- **AI API** — Pay-as-you-go (OpenAI: ~$0.01-0.05 per resume; Anthropic: similar)

## Customization

### Add More Portfolio Pages

Create `.md` files in `src/pages/`:

```markdown
---
layout: layout.njk
title: My Project
---

# Project Name

Description and details...
```

### Modify Styles

Edit `src/assets/css/style.css` — all styles are there.

### Change AI Providers

Edit `src/js/lib/aiCall.js` to add more providers (Claude, Llama, etc.).

## Troubleshooting

### "pdf.js not loaded"
- Check browser console for CDN errors
- Verify internet connection
- Refresh page

### "API error"
- Verify API key is correct and has available credits
- Check API provider's status page
- Ensure prompt is not too long (>4000 tokens)

### Build fails locally
- Delete `node_modules/` and `_site/`
- Run `npm install` again
- Run `npm run build`

## License

Place your license here (MIT, Apache, GPL, etc.).

## Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Check existing documentation
- Review the PROJECT_PLAN.md for architecture details

---

Built with ❤️ using Eleventy + Vanilla JS
