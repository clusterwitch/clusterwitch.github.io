export const exportPdf = async (htmlContent, filename = 'tailored-resume.pdf') => {
  const element = document.createElement('div');
  element.innerHTML = htmlContent;

  // If html2pdf.js is loaded, use it
  if (typeof html2pdf !== 'undefined') {
    const opt = {
      margin: 10,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    };
    try {
      await html2pdf().set(opt).from(element).save();
      window.app.log(`✓ PDF exported as ${filename}`);
    } catch (error) {
      window.app.log(`✗ Error exporting PDF: ${error.message}`);
      throw error;
    }
  } else {
    // Fallback: use browser print dialog
    const printWindow = window.open('', '', 'width=800,height=600');
    if (!printWindow) {
      throw new Error('Print window blocked by browser');
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head><title>${filename}</title></head>
      <body>${htmlContent}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    window.app.log('Print dialog opened');
  }
};
