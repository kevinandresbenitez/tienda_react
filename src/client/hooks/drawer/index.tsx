import { useState } from "react";

/**
 * component to enable and disable a section of the shopping cart
 */
export function DrawerHook(){
    const [isDrawerEnabled,setDrawer] = useState<Boolean>(false);

    function enableDrawer(){
        setDrawer(true)
    }

    function disableDrawer(){
        setDrawer(false)
    }

    return {isDrawerEnabled,disableDrawer,enableDrawer}

}