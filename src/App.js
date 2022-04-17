import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Navbar";
import Home from "./Home";
import Course from "./Course";
import About from "./About";
import Book from "./Book";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/About" element={<About />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
