export const buildPrompt = (
  aiPromptTemplate,
  resumeJson,
  jobDescription,
  outputTemplate
) => {
  let prompt = aiPromptTemplate;

  // Replace {{resume}} with stringified JSON
  prompt = prompt.replace('{{resume}}', JSON.stringify(resumeJson, null, 2));

  // Replace {{job_description}} with job text
  prompt = prompt.replace('{{job_description}}', jobDescription);

  // Replace {{output_template}} with template markdown
  prompt = prompt.replace('{{output_template}}', outputTemplate);

  return prompt;
};
