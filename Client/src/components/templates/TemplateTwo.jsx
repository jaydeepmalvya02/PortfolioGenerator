import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const TemplateTwo = () => {
  const { formData } = useContext(PortfolioContext);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("profileImage");
    if (stored) setImageUrl(stored);
  }, []);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto space-y-8 font-sans text-gray-800">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
          />
        )}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-blue-800">
            {formData.name}
          </h1>
          <p className="text-xl text-gray-600 font-medium">{formData.title}</p>
          <p className="mt-2 text-gray-700">{formData.bio}</p>
        </div>
      </div>

      {/* Skills Section */}
      {formData.skills?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {formData.education?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">
            Education
          </h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold text-lg">{edu.degree}</p>
              <p className="text-gray-600">
                {edu.institution} • {edu.year}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Experience Section */}
      {formData.experience?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">
            Experience
          </h2>
          {formData.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-lg">
                {exp.role} at {exp.company}
              </p>
              <p className="text-sm text-gray-600 mb-1">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects Section */}
      {formData.projects?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">
            Projects
          </h2>
          {formData.projects.map((project, i) => (
            <div key={i} className="mb-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {project.name}
              </a>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications Section */}
      {formData.certifications?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">
            Certifications
          </h2>
          {formData.certifications.map((cert, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium text-gray-800">{cert.name}</p>
              <p className="text-sm text-gray-600">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Contact</h2>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.contact}
        </p>
        <div className="flex gap-4 mt-2">
          {formData.github && (
            <a
              href={formData.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {formData.linkedin && (
            <a
              href={formData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default TemplateTwo;
