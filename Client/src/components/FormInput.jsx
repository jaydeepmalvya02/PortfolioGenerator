import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const FormInput = () => {
  const { setFormData } = useContext(PortfolioContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle skills input as array
    if (name === "skills") {
      const skillsArray = value.split(",").map((skill) => skill.trim());
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

  return (
    <form className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Build Your Portfolio
      </h2>

      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />

      <input
        name="title"
        placeholder="Your Title"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />

      <textarea
        name="about"
        placeholder="Tell us about yourself"
        onChange={handleChange}
        rows="4"
        className="w-full px-4 py-2 border rounded-lg resize-none"
      />

      <input
        name="github"
        placeholder="GitHub URL"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />

      <input
        name="linkedin"
        placeholder="LinkedIn URL"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />

      <input
        name="skills"
        placeholder="Enter skills (comma separated)"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
      />

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
    </form>
  );
};

export default FormInput;
