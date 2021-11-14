import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <HashRouter>
      <Navbar />

      <main className="container-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="*"
            element={
              <>
                <h2>Oops, seems like you've got lost</h2>
                <p className="fs-5">
                  Lemme take you back{" "}
                  <Link to="/" className="">
                    home
                  </Link>
                  .
                </p>
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
};

export default App;
