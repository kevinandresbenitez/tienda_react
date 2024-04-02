import React,{ Suspense, lazy }  from "react";
import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import NavBar from "./components/navbar/index.js";
import { hydrateRoot } from 'react-dom/client';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from './pages/home/index.js';
import About from './pages/about/index.js';

//Importaciones de css y less
import './app.less';

export function App(){
  const location = useLocation();
    return(
      <>
      <NavBar/>
      <div className="main">
      <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <div className="fullscreen-container"></div>  
          </CSSTransition>

          <Routes location={location}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
      </TransitionGroup>

      </div>
      </>
    );
}

if (typeof document !== 'undefined') {
  hydrateRoot(document.getElementById("root"), <BrowserRouter><App /></BrowserRouter>);
}