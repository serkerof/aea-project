import  { useEffect, useState } from "react";

const Responsive = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    screenWidth > 1024 ? setIsDesktop(true) : setIsDesktop(false);
  }, [screenWidth]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
  }, []);

  return {
    isDesktop: isDesktop,
  };
};

export default Responsive;
