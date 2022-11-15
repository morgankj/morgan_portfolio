import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/" element={<Projects />} />
      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;
