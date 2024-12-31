
import React from "react";
import { useState } from "react";


export const hookDrawer = () => {

    const [isDrawerEnabled,setDrawer] = useState<boolean>(false);

    function enableDrawer(){
        setDrawer(true)
    }

    function disableDrawer(){
        setDrawer(false)
    }

    return {isDrawerEnabled,disableDrawer,enableDrawer}

};
