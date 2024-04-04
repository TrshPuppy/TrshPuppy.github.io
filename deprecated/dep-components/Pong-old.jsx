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

   const canvasRef = useRef();
   const [canvas, setCanvas] = useState();
   const [context, setContext] = useState();
   const [animationFrame, setAnimationFrame] = useState();
   const [level, setLevel] = useState(1);
   const [isPlaying, setIsPlaying] = useState(false);
   const [playerPaddle, setPlayerPaddle] = useState({ y: 250, height: 120, speed: 10 });
   const [computerPaddle, setComputerPaddle] = useState({ y: 250, height: 120, speed: 4.5 });
   const [computerPaddleSpeed, setComputerPaddleSpeed] = useState(0.0095);
   const [gameOver, setGameOver] = useState(false);
   const [ball, setBall] = useState({
      x: 50,
      y: 50,
      speed: 0.01,
      directionX: 1,
      directionY: 1,
      color: getRandomColor(),
   });

   useEffect(() => {
      setCanvas(canvasRef.current);
      console.log(canvas);
      if (canvas) {
         setContext(canvas.getContext('2d'));
      }
   }, [canvas]);

   const updateGame = () => {
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

      const drawRect = (context, x, y, width, height, color) => {
         context.fillStyle = color || 'white';
         context.fillRect(x, y, width, height);
      };

      // Draw everything
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawRect(context, 0, playerPaddle.y, 10, playerPaddle.height);
      drawRect(context, canvas.width - 10, computerPaddle.y, 10, computerPaddle.height);
      drawRect(context, ball.x, ball.y, 10, 10, ball.color);

      // Display level at the top of the canvas
      context.font = '20px Arial';
      context.fillStyle = 'white';
      context.fillText(`Level: ${level}`, 10, 20);

      // Update player paddle position based on mouse movement
      drawRect(context, 0, playerPaddle.y, 10, playerPaddle.height);
   };

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

   const handleMouseMovement = (event) => {
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;
      setPlayerPaddle({
         ...playerPaddle,
         y: Math.min(canvas.height - playerPaddle.height, Math.max(0, mouseY - playerPaddle.height / 2)),
      });
   };

   useEffect(() => {
      const sleep = (ms) => new Promise((_) => setTimeout(_, ms));

      if (isPlaying) {
         setCanvas(canvasRef.current);
      }

      const gameLoop = async () => {
         const _ = await sleep(10);
         updateGame();
      };

      while (isPlaying) {
         gameLoop();
      }
   }, [isPlaying]);

   const startGame = async () => {
      setGameOver(false);
      setLevel(1);
      setIsPlaying(() => true);
      setPlayerPaddle({ ...playerPaddle, height: 120 }); // Reset player paddle height
      setComputerPaddle({ ...computerPaddle, height: 120 }); // Reset computer paddle height
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
