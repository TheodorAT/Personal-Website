import ContactInfo from "./components/ContactInfo";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import MathVisuals from "./pages/MathVisuals";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="master" bs-theme="dark">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/math" element={<MathVisuals />} />
      </Routes>
      <ContactInfo />
    </div>
  );
}

export default App;
