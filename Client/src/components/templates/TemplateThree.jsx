// src/components/templates/TemplateThree.jsx
import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const TemplateThree = () => {
  const { formData } = useContext(PortfolioContext);

  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-4xl mx-auto shadow-lg space-y-6">
      {/* Profile Section */}
      <div className="text-center">
        {formData.profilePic && (
          <img
            src={formData.profilePic}
            alt="Profile"
            className="mx-auto my-4 rounded-full w-32 h-32 object-cover border-4 border-white"
          />
        )}
        <h1 className="text-3xl font-bold">{formData.name}</h1>
        <p className="italic">{formData.role}</p>
      </div>

      {/* About / Bio */}
      {formData.bio && (
        <div>
          <h2 className="text-xl font-semibold underline">About Me</h2>
          <p className="text-sm">{formData.bio}</p>
        </div>
      )}

      {/* Skills */}
      {formData.skills && (
        <div>
          <h2 className="text-xl font-semibold underline">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.split(",").map((skill, i) => (
              <span
                key={i}
                className="bg-white text-black px-3 py-1 rounded-full text-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education && (
        <div>
          <h2 className="text-xl font-semibold underline">Education</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            {formData.education.split("\n").map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {formData.experience && (
        <div>
          <h2 className="text-xl font-semibold underline">Experience</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            {formData.experience.split("\n").map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects */}
      {formData.projects && (
        <div>
          <h2 className="text-xl font-semibold underline">Projects</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            {formData.projects.split("\n").map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact */}
      <div>
        <h2 className="text-xl font-semibold underline">Contact</h2>
        {formData.contact && <p className="text-sm">{formData.contact}</p>}
        {formData.email && <p className="text-sm">Email: {formData.email}</p>}
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-4 mt-4">
        {formData.github && (
          <a
            href={formData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
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
        {formData.twitter && (
          <a
            href={formData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Twitter
          </a>
        )}
        {formData.portfolio && (
          <a
            href={formData.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Portfolio
          </a>
        )}
      </div>
    </div>
  );
};

export default TemplateThree;
