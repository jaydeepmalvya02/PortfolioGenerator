// src/components/templates/TemplateTwo.jsx
import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const TemplateTwo = () => {
  const { formData } = useContext(PortfolioContext);

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={formData.profilePic} alt="profile" width="120" />
        <div>
          <h2>{formData.name}</h2>
          <h3>{formData.role}</h3>
        </div>
      </div>
      <p>{formData.bio}</p>
      <strong>Skills:</strong> {formData.skills}
      <p>Contact: {formData.contact}</p>
    </div>
  );
};

export default TemplateTwo;
