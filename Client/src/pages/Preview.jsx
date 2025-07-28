import { useContext, useRef } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import TemplateOne from "../components/templates/TemplateOne";
import TemplateTwo from "../components/templates/TemplateTwo";
import TemplateThree from "../components/templates/TemplateThree";
import html2pdf from "html2pdf.js";

const Preview = () => {
  const { selectedTemplate } = useContext(PortfolioContext);
  const templateRef = useRef(null);

  const handleDownload = () => {
    const element = templateRef.current;
    if (!element) {
      alert("Template not loaded.");
      return;
    }

    const opt = {
      margin: 0.2,
      filename: "my_portfolio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true, // important for external/public images
        logging: true, // optional: helpful for debugging
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "TemplateOne":
        return <TemplateOne />;
      case "TemplateTwo":
        return <TemplateTwo />;
      case "TemplateThree":
        return <TemplateThree />;
      default:
        return <TemplateOne />;
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-end">
        <button
          onClick={handleDownload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
        >
          Download PDF
        </button>
      </div>
      <div
        ref={templateRef}
        className="bg-white p-6 rounded-xl shadow min-h-screen"
        id="pdf-content"
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Preview;
