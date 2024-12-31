import { CSSTransition, TransitionGroup } from "react-transition-group";
import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import React, { Suspense,lazy }  from "react";
import { useState } from "react";
import { useEffect } from "react";
import './index.less';
import { Product } from "../models/product/index.ts";

const Home = lazy(()=>{return import('../pages/home/index.tsx')});
const ProductDetail = lazy(()=>{return import('../pages/productDetail/index.tsx')});
const About = lazy(()=>{return import('../pages/about/index.tsx')});
const Faq = lazy(()=>{return import('../pages/faq/index.tsx')});
const Contact = lazy(()=>{return import('../pages/contact/index.tsx')});
const PageNotFound = lazy(()=>{return import('../pages/404/index.tsx')});

export default function Router({homeData,productData}:{homeData:Product[] | null,productData:Product | null}){
    const location = useLocation();

    const [isHidrated,setHidrating] = useState(true);
    useEffect(()=>{setHidrating(false)},[])


    return(
        !isHidrated ? 
        /*For the client*/
        <TransitionGroup>     
            <CSSTransition key={location.key} classNames="fade" timeout={250}>
                <div className="fullscreen-container "></div>  
            </CSSTransition>

            <Suspense fallback={<div className="fullscreen-container"></div>  }>
                <Routes location={location} >
                    <Route path="/" element={<Home homeData={homeData} />} />
                    <Route path="/product/:id" element={<ProductDetail productData={productData}/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/faq" element={<Faq/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<PageNotFound/>}  />
                </Routes>   
            </Suspense>
        </TransitionGroup>
        :
        /*For the server*/
        <Suspense>
            <Routes location={location} >
                <Route path="/" element={<Home homeData={homeData} />} />
                <Route path="/product/:id" element={<ProductDetail productData={productData} />} />
                <Route path="/about" element={<About/>} />
                <Route path="/faq" element={<Faq/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<PageNotFound/>}  />
            </Routes>   
        </Suspense>

    )
}