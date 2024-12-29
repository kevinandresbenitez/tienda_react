import React,{useEffect, useRef, useState } from "react"
import './index.less';

export default function PageLoader(){
    
    const handleLoad = ()=>{
        const pageLoader:HTMLElement | null =document.querySelector('.pageloader-container');

        if(pageLoader){            
            pageLoader.style.animation = "hiddePageLoader 1s"
            pageLoader.addEventListener("animationend",()=>{
                pageLoader.style.display = "none"
            }) 
        }
        
    }

    useEffect(()=>{    
        if (document.readyState === 'complete') {
            
            handleLoad();
          } else {
            window.addEventListener("load", handleLoad);
          }
          
          return () => {
            window.removeEventListener("load", handleLoad);
          };
    },[])

    return(
        <div className='pageloader-container'>
            <span className="loader"></span>
        </div>
    )

}