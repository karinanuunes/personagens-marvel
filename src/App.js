import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import "./index.css";
// import Card from "./components/Card";
// import Form from "./components/Form";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
