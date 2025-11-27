import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Milestones from "./components/Milestones";
import Navbar from "./components/Navbar";
import SEOResults from "./components/SEOResults";
import VideoUpload from "./components/VideoUpload";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<VideoUpload />} />
        <Route path="/results" element={<SEOResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/milestones" element={<Milestones />} />
      </Routes>
    </Router>
  );
}

export default App;
