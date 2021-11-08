import React from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />

      <Home />
    </div>
  );
};

export default App;
