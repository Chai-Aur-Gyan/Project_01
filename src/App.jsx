
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";




function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#111111]">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
