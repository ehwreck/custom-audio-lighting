import { useEffect, useState, useRef } from "react";

const useOnFirstRender = (cb) => {
    
    const didMount = useRef(false);
    const [totalRenders, setTotalRenders] = useState(0);

    const handleCallback = () => {
        cb();
        setTotalRenders(totalRenders+1);
    }

    useEffect(()=>{
        if(didMount.current && totalRenders === 0) handleCallback();
        else didMount.current = true;
    });
}

export default useOnFirstRender;