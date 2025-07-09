
import React from "react";
import { useState } from "react";
import { useDrawerType } from "../types/useDrawer";


export const hookDrawer = ():useDrawerType => {

    const [isDrawerEnabled,setDrawer] = useState<boolean>(false);

    function enableDrawer(){
        setDrawer(true)
    }

    function disableDrawer(){
        setDrawer(false)
    }

    return {isDrawerEnabled,disableDrawer,enableDrawer}

};
