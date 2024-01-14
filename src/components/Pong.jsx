import React, { useState, useEffect, useRef } from 'react';

const Pong = () => {
   const canvas = useRef();
   const [ctx, setCTX] = useState();
   const [isPlaying, setIsPlaying] = useState(false);

   useEffect(() => {
      setCTX(canvas.current);
   }, []);

   useEffect(() => {
      let animationID;

      let count = 0;

      const gameLoop = () => {
         count++;
         animationID = requestAnimationFrame(gameLoop);
      };

      if (isPlaying) {
         gameLoop();
      }

      return () => cancelAnimationFrame(animationID);
   }, [isPlaying]);

   const startLoop = () => {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
   };

   return (
      <div className="pong">
         <canvas ref={canvas} width={800} height={600}></canvas>
         <button onClick={startLoop}>Start</button>
      </div>
   );
};

export default Pong;
