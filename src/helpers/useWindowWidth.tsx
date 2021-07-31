import { useState, useEffect } from 'react';

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};
