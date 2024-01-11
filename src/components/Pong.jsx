import React, { useState, useEffect, useRef } from 'react';

const Pong = () => {
   const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   };

   const canvasRef = useRef(null);
   const [level, setLevel] = useState(1);
   const [isPlaying, setIsPlaying] = useState(false);
   const [ball, setBall] = useState({
      x: 50,
      y: 50,
      speed: 0.01,
      directionX: 1,
      directionY: 1,
      color: getRandomColor(),
   });
   const [playerPaddle, setPlayerPaddle] = useState({ y: 250, height: 120, speed: 10 });
   const [computerPaddle, setComputerPaddle] = useState({ y: 250, height: 120, speed: 4.5 });
   const [computerPaddleSpeed, setComputerPaddleSpeed] = useState(0.0095);
   const [gameOver, setGameOver] = useState(false);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrame;

      const updateGame = () => {
         if (!isPlaying) return;

         // Update ball position
         setBall((prevBall) => ({
            ...prevBall,
            x: prevBall.x + prevBall.speed * prevBall.directionX,
            y: prevBall.y + prevBall.speed * prevBall.directionY,
         }));

         // Check collision with walls
         if (ball.y + ball.speed * ball.directionY > canvas.height || ball.y + ball.speed * ball.directionY < 0) {
            setBall((prevBall) => ({ ...prevBall, directionY: -prevBall.directionY }));
         }

         // Check collision with paddles
         const isPaddleCollision =
            (ball.x + ball.speed * ball.directionX < 10 &&
               ball.y + ball.speed * ball.directionY > playerPaddle.y &&
               ball.y + ball.speed * ball.directionY < playerPaddle.y + playerPaddle.height) ||
            (ball.x + ball.speed * ball.directionX > canvas.width - 10 &&
               ball.y + ball.speed * ball.directionY > computerPaddle.y &&
               ball.y + ball.speed * ball.directionY < computerPaddle.y + computerPaddle.height);

         if (isPaddleCollision) {
            setBall((prevBall) => ({
               ...prevBall,
               directionX: -prevBall.directionX,
               speed: prevBall.speed + 0.0025,
            }));
            setComputerPaddleSpeed((prevSpeed) => prevSpeed + 0.002015);
         }

         // Check for scoring
         if (ball.x + ball.speed * ball.directionX > canvas.width) {
            handleScore();
         }

         // Check for game over
         if (ball.x + ball.speed * ball.directionX < 0) {
            handleGameOver();
            return;
         }

         // Computer paddle follows the ball
         setComputerPaddle((prevPaddle) => ({
            ...prevPaddle,
            y:
               prevPaddle.y +
               (computerPaddle.y + computerPaddle.height / 2 < ball.y ? computerPaddleSpeed : -computerPaddleSpeed),
         }));

         // Draw everything
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         drawRect(ctx, 0, playerPaddle.y, 10, playerPaddle.height);
         drawRect(ctx, canvas.width - 10, computerPaddle.y, 10, computerPaddle.height);
         drawRect(ctx, ball.x, ball.y, 10, 10, ball.color);

         // Display level at the top of the canvas
         ctx.font = '20px Arial';
         ctx.fillStyle = 'white';
         ctx.fillText(`Level: ${level}`, 10, 20);

         // Update player paddle position based on mouse movement
         drawRect(ctx, 0, playerPaddle.y, 10, playerPaddle.height);

         // Request animation frame
         animationFrame = requestAnimationFrame(updateGame);
      };

      if (isPlaying) {
         updateGame();
      }

      // Cleanup
      return () => cancelAnimationFrame(animationFrame);
   }, [isPlaying, level, ball, playerPaddle, computerPaddle, computerPaddleSpeed, gameOver]);

   const handleScore = () => {
      // Player scored a point
      setLevel((prevLevel) => prevLevel + 1);
      setBall({
         x: canvasRef.current.width / 2,
         y: canvasRef.current.height / 2,
         speed: 0.01, // Reset ball speed for each new level
         directionX: -1,
         directionY: 1,
         color: getRandomColor(),
      });
      // Decrease paddle height with each new level
      setPlayerPaddle((prevPaddle) => ({ ...prevPaddle, height: Math.max(20, prevPaddle.height - 10) }));
      setComputerPaddle((prevPaddle) => ({ ...prevPaddle, height: Math.max(20, prevPaddle.height - 5) }));
      setComputerPaddleSpeed(0.0095);
   };

   const handleGameOver = () => {
      setGameOver(true);
      setIsPlaying(false);
   };

   const startGame = () => {
      setGameOver(false);
      setLevel(1);
      setIsPlaying(true);
      setPlayerPaddle({ ...playerPaddle, height: 120 }); // Reset player paddle height
      setComputerPaddle({ ...computerPaddle, height: 120 }); // Reset computer paddle height
   };

   const handleMouseMovement = (event) => {
      const canvas = canvasRef.current;
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;
      setPlayerPaddle({
         ...playerPaddle,
         y: Math.min(canvas.height - playerPaddle.height, Math.max(0, mouseY - playerPaddle.height / 2)),
      });
   };

   const drawRect = (ctx, x, y, width, height, color) => {
      ctx.fillStyle = color || 'white';
      ctx.fillRect(x, y, width, height);
   };

   return (
      <div>
         <canvas
            ref={canvasRef}
            width={800}
            height={600}
            style={{ border: '1px solid #666' }}
            onMouseMove={handleMouseMovement}
         ></canvas>
         {!isPlaying && (
            <div>
               <p style={{ textAlign: 'center' }}>
                  {gameOver ? 'Game Over!' : `Level: ${level}`} <br />
                  <button onClick={startGame}>Start</button>
               </p>
            </div>
         )}
      </div>
   );
};

export default Pong;
