import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioProvider from "./context/PortfolioContext";
import Home from "./pages/Home";
import Preview from "./pages/Preview";

function App() {
  return (
    
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
    
    
  );
}

export default App;
