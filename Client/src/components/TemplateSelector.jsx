import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const TemplateSelector = () => {
  const { setSelectedTemplate } = useContext(PortfolioContext);

  const templates = [
    { id: "TemplateOne", name: "Modern Blue" },
    { id: "TemplateTwo", name: "Minimal Clean" },
    { id: "TemplateThree", name: "Dark Professional" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => setSelectedTemplate(template.id)}
          className="bg-white hover:bg-indigo-100 border border-indigo-300 text-indigo-700 font-medium py-3 px-5 rounded-xl shadow-sm transition duration-200 transform hover:-translate-y-1 hover:shadow-md"
        >
          {template.name}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
