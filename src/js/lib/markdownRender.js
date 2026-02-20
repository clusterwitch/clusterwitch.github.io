export const renderMarkdown = (markdown) => {
  // marked.js is loaded globally via CDN
  if (typeof marked === 'undefined') {
    throw new Error('marked.js not loaded');
  }

  const html = marked.parse(markdown, {
    breaks: true,
    gfm: true,
  });
  return html;
};
