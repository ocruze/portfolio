import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Resume = React.lazy(() => import("./pages/Resume"));

const App = () => {
    const { t } = useTranslation();

    return (
        <React.Suspense
            fallback={
                <main className="container text-center align-items-center">
                    <div className="row px-4">
                        <h1 className="ff-poppins fw-bold">{t("global.loading")}</h1>
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
                                        <h2>{t("pages.not_found.heading")}</h2>
                                        <p className="fs-5">
                                            <Link to="/" className="btn btn-primary py-2">
                                                <FontAwesomeIcon icon={faHome} />
                                                &nbsp;{t("pages.not_found.homepage_link_text")}
                                            </Link>
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
