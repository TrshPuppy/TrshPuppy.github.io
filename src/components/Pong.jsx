import React, { useState, useEffect, useRef } from 'react';

const Pong = () => {
   const canvas = useRef();
   const paddleWidth = 10;
   const [ctx, setCTX] = useState();
   let [isPlaying, setIsPlaying] = useState(false);
   const [buttonText, setButtonText] = useState('Start');
   const [ballSpeed, setBallSpeed] = useState(2.5);
   const [level, setLevel] = useState(1); // New state for level
   const [ball, setBall] = useState({
      x: 50,
      y: 50,
      speed: ballSpeed,
      directionX: 1,
      directionY: 1,
      color: '#ffffff',
   });

   const [leftPaddle, setLeftPaddle] = useState({
      y: 270,
      height: 140,
      color: '#ffffff',
   });

   const [rightPaddle, setRightPaddle] = useState({
      y: 270,
      height: 140,
      speed: 0.06,
      maxSpeed: 4,
      color: '#ffffff',
   });

   const handleMouseMove = (event) => {
      const mouseY = event.clientY - canvas.current.getBoundingClientRect().top;
      leftPaddle.y = Math.max(0, Math.min(canvas.current.height - leftPaddle.height, mouseY - leftPaddle.height / 2));
   };

   useEffect(() => {
      if (!canvas.current) return;
      setCTX(canvas.current.getContext('2d'));
   }, [canvas]);

   useEffect(() => {
      let animationID;

      const gameLoop = () => {
         // Check if user scored
         if (ball.x - 10 > canvas.current.width) {
            setIsPlaying(false);
            setLevel((prevLevel) => prevLevel + 1);
            setButtonText(`Start Level ${level}`);
            setBallSpeed((prevBallSpeed) => prevBallSpeed + 0.1);
            setBall((prevBall) => ({
               ...prevBall,
               x: 50,
               y: 50,
               speed: ballSpeed,
               directionX: 1,
               directionY: 1,
               color: '#ffffff',
            }));

            setLeftPaddle((prevPaddle) => ({
               ...prevPaddle,
               height: prevPaddle.height - 2,
            }));

            setRightPaddle((prevPaddle) => ({
               ...prevPaddle,
               maxSpeed: prevPaddle.maxSpeed + 2,
               speed: prevPaddle.speed + 0.025,
            }));

            return;
         }

         // Check if player gets pwned
         if (ball.x + 10 < 0) {
            setButtonText(() => 'Game over. Try again?');
            setIsPlaying(false);
            setBallSpeed(2.5);
            setLevel(1);
            setBall({
               x: 50,
               y: 50,
               speed: ballSpeed,
               directionX: 1,
               directionY: 1,
               color: '#ffffff',
            });

            setLeftPaddle({
               y: 270,
               height: 120,
               color: '#ffffff',
            });

            setRightPaddle({
               y: 270,
               height: 120,
               speed: 0.06,
               maxSpeed: 4,
               color: '#ffffff',
            });

            return;
         }

         // Move ball
         ball.x += ball.speed * ball.directionX;
         ball.y += ball.speed * ball.directionY;

         // Check collision with paddles
         // prettier-ignore
         if (
            ball.x < paddleWidth && 
            ball.y > leftPaddle.y && 
            ball.y < leftPaddle.y + leftPaddle.height) {
            ball.directionX = 1;
         } else if (
            ball.x > canvas.current.width - paddleWidth &&
            ball.y > rightPaddle.y &&
            ball.y < rightPaddle.y + rightPaddle.height
         ) {
            ball.speed = ball.speed + 0.25;
            ball.directionX = -1;
         }

         // Check collision with walls
         // prettier-ignore
         if (
            ball.y + ball.speed > canvas.current.height || 
            ball.y - ball.speed < 0
         ) {
            ball.directionY *= -1;
         }

         // Draw paddles
         ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
         ctx.fillStyle = leftPaddle.color;
         ctx.fillRect(0, leftPaddle.y, paddleWidth, leftPaddle.height);
         ctx.fillStyle = rightPaddle.color;
         ctx.fillRect(canvas.current.width - paddleWidth, rightPaddle.y, paddleWidth, rightPaddle.height);

         // Update right paddle position to follow the ball
         if (ball.x > canvas.current.width / 2 && ball.directionX > 0) {
            const deltaY = ball.y - (rightPaddle.y + rightPaddle.height / 2);
            const desiredY = rightPaddle.y + deltaY * rightPaddle.speed;

            // Ensure the paddle does not exceed the max speed
            rightPaddle.y =
               Math.abs(desiredY - rightPaddle.y) > rightPaddle.maxSpeed
                  ? rightPaddle.y + Math.sign(desiredY - rightPaddle.y) * rightPaddle.maxSpeed
                  : desiredY;
         } else {
            // Move the right paddle towards the middle when the ball is in the left half
            const middleY = canvas.current.height / 2 - rightPaddle.height / 2;
            const deltaY = middleY - (rightPaddle.y + rightPaddle.height / 2);
            const desiredY = rightPaddle.y + deltaY * rightPaddle.speed;

            // Ensure the paddle does not exceed the max speed
            rightPaddle.y =
               Math.abs(desiredY - rightPaddle.y) > rightPaddle.maxSpeed
                  ? rightPaddle.y + Math.sign(desiredY - rightPaddle.y) * rightPaddle.maxSpeed
                  : desiredY;
         }

         // Draw ball
         ctx.fillStyle = ball.color;
         ctx.beginPath();
         ctx.arc(ball.x, ball.y, 10, 0, 2 * Math.PI);
         ctx.fill();

         animationID = requestAnimationFrame(gameLoop);
      };

      if (isPlaying) {
         gameLoop();
      }

      return () => cancelAnimationFrame(animationID);
   }, [isPlaying]);

   const updateIsPlaying = () => {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
   };

   return (
      <div className="pong">
         <canvas ref={canvas} width={800} height={600} onMouseMove={handleMouseMove}></canvas>
         <p>Level: {level}</p>
         <button onClick={updateIsPlaying}>Start</button>
      </div>
   );
};

export default Pong;
