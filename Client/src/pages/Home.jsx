import FormInput from "../components/FormInput";
import TemplateSelector from "../components/TemplateSelector";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Create Your Portfolio
        </h1>

        {/* Form Section */}
        <div className="mb-10">
          <FormInput />
        </div>

        {/* Template Selection */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Select a Template
          </h2>
          <TemplateSelector />
        </div>

        {/* Preview Button */}
        <div className="flex justify-center">
          <Link to="/preview">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all">
              Preview Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
