import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/index.js";
import About from "./pages/about/index.js"
import NavBar from "./components/navbar/index.js";
export function App(){
    return(
      <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
      </>
    );
}

if (typeof document !== 'undefined') {
    ReactDOM.hydrate(<App />, document.getElementById("root"));
}
