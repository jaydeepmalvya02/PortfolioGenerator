import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const TemplateOne = () => {
  const { formData } = useContext(PortfolioContext);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("profileImage");
    if (stored) setImageUrl(stored);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white rounded shadow-md">
      {/* Profile Image */}
      {imageUrl && (
        <img
          crossOrigin="anonymous"
          src={imageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-blue-400"
        />
      )}

      {/* Basic Info */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{formData?.name}</h1>
        <h2 className="text-lg text-gray-600">{formData?.title}</h2>
        <p className="text-sm text-gray-700">
          {formData?.about || formData?.bio}
        </p>
      </div>

      {/* Skills */}
      {formData?.skills?.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Skills</h3>
          <ul className="flex gap-2 flex-wrap text-sm">
            {formData.skills.map((skill, i) => (
              <li key={i} className="bg-blue-100 px-3 py-1 rounded-full">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects */}
      {formData?.projects?.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Projects</h3>
          <ul className="space-y-2">
            {formData.projects.map((proj, i) => (
              <li key={i} className="border p-3 rounded">
                <h4 className="font-bold text-md">{proj.name}</h4>
                <p className="text-sm text-gray-700">{proj.description}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm underline"
                  >
                    View Project
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Education */}
      {formData?.education?.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Education</h3>
          <ul className="space-y-1 text-sm">
            {formData.education.map((edu, i) => (
              <li key={i}>
                🎓 <strong>{edu.degree}</strong> – {edu.institute} ({edu.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {formData?.experience?.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Experience</h3>
          <ul className="space-y-1 text-sm">
            {formData.experience.map((exp, i) => (
              <li key={i}>
                💼 <strong>{exp.position}</strong> at {exp.company} (
                {exp.duration})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact */}
      {(formData?.email || formData?.phone || formData?.contact) && (
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          {formData.email && <p className="text-sm">📧 {formData.email}</p>}
          {formData.phone && <p className="text-sm">📞 {formData.phone}</p>}
          {formData.contact && <p className="text-sm">📍 {formData.contact}</p>}
        </div>
      )}

      {/* Social Links */}
      <div className="flex justify-center gap-4 text-blue-600 underline">
        {formData.github && (
          <a href={formData.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {formData.linkedin && (
          <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {formData.portfolio && (
          <a
            href={formData.portfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        )}
        {formData.twitter && (
          <a href={formData.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        )}
      </div>
    </div>
  );
};

export default TemplateOne;
