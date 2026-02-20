export const setupFileInputs = () => {
  const jobDescFile = document.getElementById('jobDescFile');
  const jobDescText = document.getElementById('jobDescText');
  const resumeFile = document.getElementById('resumeFile');
  const outputTemplateFile = document.getElementById('outputTemplateFile');
  const aiPromptFile = document.getElementById('aiPromptFile');

  jobDescFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      if (file.type === 'application/pdf') {
        const text = await window.app.parsePdf(file);
        window.app.jobDescription = text;
      } else {
        const text = await file.text();
        window.app.jobDescription = text;
      }
      window.app.log(`✓ Job description loaded: ${window.app.jobDescription.length} chars`);
    } catch (error) {
      window.app.log(`✗ Error loading job description: ${error.message}`);
    }
  });

  jobDescText.addEventListener('change', (e) => {
    window.app.jobDescription = e.target.value;
    window.app.log(`✓ Job description pasted: ${window.app.jobDescription.length} chars`);
  });

  resumeFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const text = await file.text();
      window.app.resume = JSON.parse(text);
      window.app.log(`✓ Resume loaded: ${Object.keys(window.app.resume).length} keys`);
    } catch (error) {
      window.app.log(`✗ Error loading resume: ${error.message}`);
    }
  });

  outputTemplateFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      window.app.outputTemplate = await file.text();
      window.app.log(`✓ Output template loaded: ${window.app.outputTemplate.length} chars`);
    } catch (error) {
      window.app.log(`✗ Error loading output template: ${error.message}`);
    }
  });

  aiPromptFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      window.app.aiPrompt = await file.text();
      window.app.log(`✓ AI prompt loaded: ${window.app.aiPrompt.length} chars`);
    } catch (error) {
      window.app.log(`✗ Error loading AI prompt: ${error.message}`);
    }
  });

  window.app.log('File input listeners attached');
};
