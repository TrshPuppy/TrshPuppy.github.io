import React, { useState, useEffect, useRef } from 'react';
import SiteMenu from "./SiteMenu.jsx";

const Wrapper = ({ View }) => {
    const mouseRef = useRef();
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouseX(event.clientX);
            setMouseY(event.clientY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
  }, []);

  const calculateBackgroundPosition = () => {
    const offsetX = (mouseX / window.innerWidth).toFixed(2) * 6;
    const offsetY = (mouseY / window.innerHeight).toFixed(2) * 6;
    return `${offsetX}% ${offsetY}%`;
  };

  return (
    <>
      <style>{`html {background-position: ${calculateBackgroundPosition()}}`}</style>
      <SiteMenu />
      <main ref={mouseRef}>
        <View />
      </main>
    </>
  );
};

export default Wrapper;