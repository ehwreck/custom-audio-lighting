import { useEffect, useRef } from "react";

const useDidUpdateEffect = (cb, dependencies) => {
    const didMount = useRef(false);
    
    useEffect(()=>{
        if(didMount.current) cb();
        else didMount.current = true;
    }, dependencies);
}

export default useDidUpdateEffect;