import { setupFileInputs } from './lib/fileUpload.js';
import { parsePdf } from './lib/pdfParser.js';
import { buildPrompt } from './lib/templateMerge.js';
import { callAiApi } from './lib/aiCall.js';
import { renderMarkdown } from './lib/markdownRender.js';
import { exportPdf } from './lib/pdfExport.js';

// Initialize global app state
window.app = {
  jobDescription: '',
  resume: {},
  outputTemplate: '',
  aiPrompt: '',
  aiResponse: '',
  tailoredHtml: '',
  logs: [],

  async parsePdf(blob) {
    return await parsePdf(blob);
  },

  log(message) {
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`[${timestamp}] ${message}`);
    document.getElementById('debugLog').textContent += `[${timestamp}] ${message}\n`;
    console.log(message);
  },
};

// Setup file inputs
setupFileInputs();

// Load example data from embedded script tags
function loadExampleData() {
  try {
    // Load example resume JSON
    const resumeScript = document.getElementById('example-resume');
    if (resumeScript) {
      window.app.resume = JSON.parse(resumeScript.textContent);
      window.app.log('📋 Example resume loaded');
    }

    // Load example AI prompt
    const promptScript = document.getElementById('example-ai-prompt');
    if (promptScript) {
      window.app.aiPrompt = promptScript.textContent;
      window.app.log('🤖 Example AI prompt loaded');
    }

    // Load example output template
    const templateScript = document.getElementById('example-output-template');
    if (templateScript) {
      window.app.outputTemplate = templateScript.textContent;
      window.app.log('📄 Example output template loaded');
    }

    // Load example job description from textarea (already pre-filled in HTML)
    const jobDescArea = document.getElementById('jobDescText');
    if (jobDescArea && jobDescArea.value.trim()) {
      window.app.jobDescription = jobDescArea.value;
      window.app.log('💼 Example job description loaded');
    }
  } catch (error) {
    window.app.log(`⚠️ Could not load example data: ${error.message}`);
  }
}

// Initialize example data on page load
loadExampleData();

// Generate button
document.getElementById('generateBtn').addEventListener('click', async () => {
  try {
    window.app.log('🚀 Starting AI generation...');

    const apiKey = document.getElementById('apiKey').value;
    const provider = document.getElementById('apiProvider').value;

    if (!apiKey.trim()) {
      throw new Error('API key required');
    }

    if (!window.app.aiPrompt) {
      throw new Error('AI prompt template not loaded');
    }

    if (!window.app.resume || Object.keys(window.app.resume).length === 0) {
      throw new Error('Resume JSON not loaded');
    }

    if (!window.app.jobDescription) {
      throw new Error('Job description not provided');
    }

    if (!window.app.outputTemplate) {
      throw new Error('Output template not loaded');
    }

    const prompt = buildPrompt(
      window.app.aiPrompt,
      window.app.resume,
      window.app.jobDescription,
      window.app.outputTemplate
    );

    window.app.log(`📧 Sending ${prompt.length} character prompt to ${provider}...`);
    document.getElementById('generateBtn').disabled = true;

    const response = await callAiApi(prompt, apiKey, provider);

    window.app.aiResponse = response;
    window.app.log('✓ AI response received');

    const html = renderMarkdown(response);
    window.app.tailoredHtml = html;

    document.getElementById('previewContent').innerHTML = html;
    window.app.log('✓ Preview rendered');
    
    document.getElementById('generateBtn').disabled = false;
  } catch (error) {
    window.app.log(`❌ ERROR: ${error.message}`);
    alert(`Error: ${error.message}`);
    document.getElementById('generateBtn').disabled = false;
  }
});

// Export PDF button
document.getElementById('exportPdfBtn').addEventListener('click', async () => {
  if (!window.app.tailoredHtml) {
    alert('No preview to export. Generate a tailored resume first.');
    return;
  }
  try {
    await exportPdf(window.app.tailoredHtml, 'tailored-resume.pdf');
  } catch (error) {
    alert(`Export failed: ${error.message}`);
  }
});

// Copy button
document.getElementById('copyBtn').addEventListener('click', () => {
  if (!window.app.aiResponse) {
    alert('No content to copy. Generate a tailored resume first.');
    return;
  }
  navigator.clipboard.writeText(window.app.aiResponse).then(() => {
    window.app.log('📋 Markdown copied to clipboard');
    alert('Copied to clipboard!');
  }).catch(error => {
    window.app.log(`✗ Copy failed: ${error.message}`);
    alert(`Copy failed: ${error.message}`);
  });
});

// Print button
document.getElementById('printBtn').addEventListener('click', () => {
  window.print();
  window.app.log('🖨️ Print dialog opened');
});

window.app.log('✅ Tool initialized');
