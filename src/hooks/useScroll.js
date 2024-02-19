import { useState, useEffect } from "react";

const useScroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      let st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop + 50) { // Reducir la diferencia de píxeles a 10
        setIsVisible(false);
      } else if (st < lastScrollTop - 50 || st === 0) { // Reducir la diferencia de píxeles a 10
        setIsVisible(true);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
}

export default useScroll;

