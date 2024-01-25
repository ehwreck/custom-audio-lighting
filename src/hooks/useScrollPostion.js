import { useState, useEffect } from "react";

export default function useScrollPosition(){
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);
    
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }
    
    useEffect(() => {
        // Add handleScroll event listener when component mounts.
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        // Remove handleScroll event listener when component unmounts.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}
