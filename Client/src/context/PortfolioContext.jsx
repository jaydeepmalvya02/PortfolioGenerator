import { createContext, useState } from "react";

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState("TemplateOne");

  return (
    <PortfolioContext.Provider
      value={{ formData, setFormData, selectedTemplate, setSelectedTemplate }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
