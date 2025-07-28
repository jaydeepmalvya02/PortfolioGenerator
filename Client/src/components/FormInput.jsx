import { useContext, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const FormInput = () => {
  const { setFormData,formData } = useContext(PortfolioContext);
  const [customSections, setCustomSections] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      const skillsArray = value.split(",").map((s) => s.trim());
      setFormData((prev) => ({ ...prev, skills: skillsArray }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setFormData((prev) => ({ ...prev, profileImage: base64Image }));
      localStorage.setItem("profileImage", base64Image);
    };
    reader.readAsDataURL(file);
  };

  // Dynamic fields handlers
  const updateNestedField = (key, index, field, value) => {
    setFormData((prev) => {
      const updated = [...(prev[key] || [])];
      updated[index][field] = value;
      return { ...prev, [key]: updated };
    });
  };

  const addNestedItem = (key, defaultValue) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), defaultValue],
    }));
  };

  const addCustomSection = () => {
    const newSections = [...customSections, { heading: "", description: "" }];
    setCustomSections(newSections);
    setFormData((prev) => ({ ...prev, customSections: newSections }));
  };

  const handleCustomSectionChange = (index, field, value) => {
    const updated = [...customSections];
    updated[index][field] = value;
    setCustomSections(updated);
    setFormData((prev) => ({ ...prev, customSections: updated }));
  };

  return (
    <form className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 text-sm sm:text-base">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Build Your Portfolio
      </h2>

      {/* Basic Info */}
      {[
        { name: "name", placeholder: "Your Name" },
        { name: "title", placeholder: "Your Title" },
        { name: "email", placeholder: "Email Address" },
        { name: "contact", placeholder: "Phone Number" },
        { name: "location", placeholder: "Location (City, Country)" },
        { name: "github", placeholder: "GitHub URL" },
        { name: "linkedin", placeholder: "LinkedIn URL" },
        { name: "skills", placeholder: "Skills (comma separated)" },
      ].map(({ name, placeholder }) => (
        <input
          key={name}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      ))}

      <textarea
        name="bio"
        placeholder="Short Bio or About You"
        rows="4"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg resize-none"
      />

      {/* Profile Image Upload */}
      <div>
        <label className="block mb-2 text-gray-700 font-medium">
          Upload Profile Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Education */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-blue-700">Education</h3>
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
            onClick={() =>
              addNestedItem("education", {
                degree: "",
                institution: "",
                year: "",
              })
            }
          >
            + Add Education
          </button>
        </div>
        {(formData.education || []).map((edu, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 border p-3 rounded-lg bg-gray-50"
          >
            <input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                updateNestedField("education", i, "degree", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <input
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                updateNestedField("education", i, "institution", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <input
              placeholder="Year"
              value={edu.year}
              onChange={(e) =>
                updateNestedField("education", i, "year", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
          </div>
        ))}
      </div>

      {/* Experience */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-blue-700">Experience</h3>
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
            onClick={() =>
              addNestedItem("experience", {
                role: "",
                company: "",
                duration: "",
                description: "",
              })
            }
          >
            + Add Experience
          </button>
        </div>
        {(formData.experience || []).map((exp, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border p-3 rounded-lg bg-gray-50"
          >
            <input
              placeholder="Role"
              value={exp.role}
              onChange={(e) =>
                updateNestedField("experience", i, "role", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <input
              placeholder="Company"
              value={exp.company}
              onChange={(e) =>
                updateNestedField("experience", i, "company", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <input
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) =>
                updateNestedField("experience", i, "duration", e.target.value)
              }
              className="px-3 py-2 border rounded col-span-full sm:col-span-1"
            />
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) =>
                updateNestedField(
                  "experience",
                  i,
                  "description",
                  e.target.value
                )
              }
              className="px-3 py-2 border rounded resize-none col-span-full"
            />
          </div>
        ))}
      </div>

      {/* Projects */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-blue-700">Projects</h3>
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
            onClick={() =>
              addNestedItem("projects", {
                name: "",
                description: "",
                link: "",
              })
            }
          >
            + Add Project
          </button>
        </div>
        {(formData.projects || []).map((proj, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 border p-3 rounded-lg bg-gray-50"
          >
            <input
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) =>
                updateNestedField("projects", i, "name", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <input
              placeholder="Project Link"
              value={proj.link}
              onChange={(e) =>
                updateNestedField("projects", i, "link", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <textarea
              placeholder="Project Description"
              value={proj.description}
              onChange={(e) =>
                updateNestedField("projects", i, "description", e.target.value)
              }
              className="px-3 py-2 border rounded resize-none col-span-full"
            />
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-blue-700">
            Certifications
          </h3>
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
            onClick={() =>
              addNestedItem("certifications", {
                name: "",
                issuer: "",
                year: "",
              })
            }
          >
            + Add Certification
          </button>
        </div>
        {(formData.certifications || []).map((cert, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 border p-3 rounded-lg bg-gray-50"
          >
            <input
              placeholder="Certificate Name"
              value={cert.name}
              onChange={(e) =>
                updateNestedField("certifications", i, "name", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <input
              placeholder="Issuer"
              value={cert.issuer}
              onChange={(e) =>
                updateNestedField("certifications", i, "issuer", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
            <input
              placeholder="Year"
              value={cert.year}
              onChange={(e) =>
                updateNestedField("certifications", i, "year", e.target.value)
              }
              className="px-3 py-2 border rounded"
            />
          </div>
        ))}
      </div>

      {/* Custom Sections */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-700">Custom Sections</h3>
        {customSections.map((section, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-gray-50 space-y-2"
          >
            <input
              type="text"
              placeholder="Section Heading"
              value={section.heading}
              onChange={(e) =>
                handleCustomSectionChange(index, "heading", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
            <textarea
              placeholder="Section Description"
              rows="3"
              value={section.description}
              onChange={(e) =>
                handleCustomSectionChange(index, "description", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg resize-none"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addCustomSection}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          + Add Custom Section
        </button>
      </div>
    </form>
  );
};

export default FormInput;
