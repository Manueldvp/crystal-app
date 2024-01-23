import { useState, useEffect } from "react";

const useScroll = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      let lastScrollTop = 0;
  
      function handleScroll() {
        let st = window.scrollY || document.documentElement.scrollTop;
        if (st > lastScrollTop + 50) {
          setIsVisible(false);
        } else if (st < lastScrollTop - 50) {
          setIsVisible(true);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return isVisible
}

export default useScroll