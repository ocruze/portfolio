import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
