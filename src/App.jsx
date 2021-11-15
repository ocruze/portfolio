import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Resume = React.lazy(() => import("./pages/Resume"));

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Suspense
      fallback={
        <main className="container text-center align-items-center">
          <div className="row px-4">
            <h1 className="ff-poppins fw-bold">Loading...</h1>
          </div>
        </main>
      }
    >
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
                  <div className="container text-center">
                    <h2>Oops, seems like you've got lost</h2>
                    <p className="fs-5">
                      Lemme take you back{" "}
                      <Link to="/" className="">
                        home
                      </Link>
                      .
                    </p>
                  </div>
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
      </HashRouter>
    </React.Suspense>
  );
};

export default App;
