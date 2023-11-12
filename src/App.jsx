import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const Projects = React.lazy(() => import("./pages/Projects"));
const Resume = React.lazy(() => import("./pages/Resume"));

const App = () => {
    const { t } = useTranslation();

    return (
        <BrowserRouter>
            <Header />
            <React.Suspense
                fallback={
                    <main className="container text-center align-items-center">
                        <div className="row px-4">
                            <h1 className="ff-poppins fw-bold">{t("global.loading")}</h1>
                        </div>
                    </main>
                }
            >
                <main className="container-xl">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </React.Suspense>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
