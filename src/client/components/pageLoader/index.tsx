import React,{useEffect, useState } from "react"
import './index.less';

export default function PageLoader(){
    const [pageIsLoad,setPageIsLoad] = useState(false);

    useEffect(()=>{
        window.addEventListener("load",(event)=>{
            setPageIsLoad(true);
        })
    },[])
    return(
        pageIsLoad ? (null):(<div className="pageloader-container"><span className="loader"></span></div>)
    )

}