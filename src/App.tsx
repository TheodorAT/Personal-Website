import ContactInfo from "./components/ContactInfo";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MathVisuals from "./pages/MathVisuals";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="master" bs-theme="dark">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/math" element={<MathVisuals />} />{" "}
      </Routes>
      <ContactInfo />
    </div>
  );
}

export default App;
