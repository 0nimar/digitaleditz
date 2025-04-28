'use client'
import { useEffect, useState } from "react";

export function useMediaQuery(display:string):Boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(display);
    const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [display]);

  return matches;

}