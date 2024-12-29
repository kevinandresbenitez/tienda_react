import React, { useState } from "react";
import './index.less';


export function Card({children}:{children:React.ReactNode}){

    return(
        <div className="card">
            {children}
        </div>
    )

}