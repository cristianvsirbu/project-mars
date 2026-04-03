import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleMatch = () => setMatches(mql.matches);

    mql.addEventListener('change', handleMatch);

    return () => mql.removeEventListener('change', handleMatch);
  }, [query]);

  return matches;
};

export default useMediaQuery;
