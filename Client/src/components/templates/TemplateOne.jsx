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
    <div className="text-center space-y-4">
      {imageUrl && (
        <img
          crossOrigin="anonymous"
          src={imageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto object-cover"
        />
      )}
      <h1 className="text-2xl font-bold">{formData.name}</h1>
      <h2 className="text-lg text-gray-600">{formData.title}</h2>
      <p className="text-sm text-gray-700">{formData.about}</p>

      {formData.skills?.length > 0 && (
        <div>
          <h3 className="font-semibold">Skills</h3>
          <ul className="flex justify-center gap-2 flex-wrap text-sm text-blue-600">
            {formData.skills.map((skill, i) => (
              <li key={i} className="bg-blue-100 px-2 py-1 rounded">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-x-4 mt-2">
        {formData.github && <a href={formData.github}>GitHub</a>}
        {formData.linkedin && <a href={formData.linkedin}>LinkedIn</a>}
      </div>
    </div>
  );
};

export default TemplateOne;
