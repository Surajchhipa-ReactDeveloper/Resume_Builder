import React from "react";
import pdf from "html-pdf";

const Result = () => {
  const generatePDF = () => {
    const content = `
      <div>
        <h1>Hello, this is a PDF!</h1>
        <p>You can put any HTML elements here.</p>
      </div>
    `;

    pdf.create(content).toBlob(function (err, blob) {
      if (err) return console.error(err);

      // Create a blob URL representing the data.
      const blobUrl = URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "document.pdf";

      // Append the link to the body
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Cleanup
      URL.revokeObjectURL(blobUrl);
      document.body.removeChild(link);
    });
  };

  return (
    <div className="result-container">
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default Result;
