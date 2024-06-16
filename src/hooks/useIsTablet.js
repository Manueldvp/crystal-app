import { useEffect, useState } from "react";

function useIsTablet() {
  const [isTablet, setIsTablet] = useState(null);

  useEffect(() => {
    const checkSize = () => {
      setIsTablet(window.innerWidth > 760);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return isTablet;
}

export default useIsTablet;