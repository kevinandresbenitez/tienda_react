import React,{useEffect, useState } from "react"
import './index.less';

export default function PageLoader(){
    const [pageIsLoad,setPageIsLoad] = useState(false);

    const handleLoad = ()=>{
        setPageIsLoad(true);
    }

    useEffect(()=>{

        if (document.readyState === "complete") {
            setPageIsLoad(true);

        } else {
            document.addEventListener("DOMContentLoaded", handleLoad);
            window.addEventListener("load", handleLoad);
        }



        return () => {
            document.removeEventListener("DOMContentLoaded", handleLoad);
            window.removeEventListener("load", handleLoad);
        }
    },[])
    return(
        pageIsLoad ? (null):(<div className="pageloader-container"><span className="loader"></span></div>)
    )

}