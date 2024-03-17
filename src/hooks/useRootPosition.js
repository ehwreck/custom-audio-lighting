import React, { useEffect, useRef } from "react";
import useOnFirstRender from "./useOnFirstRender";

export function useRootPosition(){
    const element = useRef(null);

    useOnFirstRender(()=>{
        // console.log(element.current.getClientRects());
    })

    return <React.Fragment/>
}