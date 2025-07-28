// src/components/templates/TemplateThree.jsx
import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const TemplateThree = () => {
  const { formData } = useContext(PortfolioContext);

  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-3xl mx-auto">
      {formData.profilePic && (
        <img
          src={formData.profilePic}
          alt="Profile"
          className="mx-auto my-4 rounded-full w-28 h-28 object-cover border-2 border-white"
        />
      )}
      <h1 className="text-3xl font-bold text-center">{formData.name}</h1>
      <p className="text-md text-center italic">{formData.role}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold underline mb-1">Bio</h2>
        <p className="text-sm">{formData.bio}</p>
      </div>

      {formData.skills && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold underline mb-1">Skills</h2>
          <div className="flex gap-2 flex-wrap">
            {formData.skills.split(",").map((skill, i) => (
              <span key={i} className="bg-white text-black px-2 py-1 rounded">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4">
        <h2 className="text-xl font-semibold underline mb-1">Contact</h2>
        <p className="text-sm">{formData.contact}</p>
      </div>

      <div className="mt-4">
        {formData.github && (
          <a
            href={formData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline mr-4"
          >
            GitHub
          </a>
        )}
        {formData.linkedin && (
          <a
            href={formData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

export default TemplateThree;
