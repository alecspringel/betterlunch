import { useState, useEffect } from 'react';

const useBreakpoint = (size) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${size}px)`);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, size]);
  return matches;
};

export default useBreakpoint;
