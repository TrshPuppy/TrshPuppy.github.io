import React, { useState, useEffect, useRef } from 'react';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

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
         <SiteHeader />
         <main ref={mouseRef}>
            <View />
         </main>
         {/* <SiteFooter /> */}
      </>
   );
};

export default Wrapper;
