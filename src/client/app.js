import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/index.js";
import About from "./pages/about/index.js"
import NavBar from "./components/navbar/index.js";
import { hydrateRoot } from 'react-dom/client';

//Importaciones de css y less
import './app.less';
export function App(){
    return(
      <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </>
    );
}

if (typeof document !== 'undefined') {
  hydrateRoot(document.getElementById("root"), <BrowserRouter><App /></BrowserRouter>);
}