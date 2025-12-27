import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import React, { Suspense, lazy } from "react";
import { useState } from "react";
import { useEffect } from "react";
import './index.less';

const Home = lazy(() => { return import('../pages/home/index.tsx') });
const ProductDetail = lazy(() => { return import('../pages/productDetail/index.tsx') });
const About = lazy(() => { return import('../pages/about/index.tsx') });
const Faq = lazy(() => { return import('../pages/faq/index.tsx') });
const Contact = lazy(() => { return import('../pages/contact/index.tsx') });
const SignIn = lazy(() => { return import('../pages/signIn/index.tsx') });
const SignUp = lazy(() => { return import('../pages/signUp/index.tsx') });
const PageNotFound = lazy(() => { return import('../pages/404/index.tsx') });

export default function Router() {
    const location = useLocation();

    const [isHidrated, setHidrating] = useState(true);
    useEffect(() => { setHidrating(false) }, [])


    return (
        !isHidrated ?
            /*For the client*/
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={250}>
                    <div className="fullscreen-container "></div>
                </CSSTransition>

                <Suspense fallback={<div className="fullscreen-container"></div>}>
                    <Routes location={location} >
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </TransitionGroup>
            :
            /*For the server*/
            <Suspense>
                <Routes location={location} >
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>

    )
}