import React, { useState, useEffect, useRef } from 'react';

const Pong = () => {
   const canvas = useRef();
   const paddleWidth = 20;

   let [isPlaying, setIsPlaying] = useState(false); // We have to mutate before batch
   const [ctx, setCTX] = useState();
   const [buttonText, setButtonText] = useState('Play');
   const [ballSpeed, setBallSpeed] = useState(3);
   const [level, setLevel] = useState(1);
   const [lives, setLives] = useState(3);
   const [ball, setBall] = useState({
      x: 50,
      y: 50,
      speed: ballSpeed,
      directionX: 1,
      directionY: 0.75,
      color: '#000000',
   });

   const [leftPaddle, setLeftPaddle] = useState({
      y: 270,
      height: 100,
      color: '#ffffff',
   });

   const [rightPaddle, setRightPaddle] = useState({
      y: 270,
      height: 100,
      speed: 0.06,
      maxSpeed: 4,
      color: '#ffffff',
   });

   const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   };

   const handleMouseMove = (event) => {
      const mouseY = event.clientY - canvas.current.getBoundingClientRect().top;
      leftPaddle.y = Math.max(0, Math.min(canvas.current.height - leftPaddle.height, mouseY - leftPaddle.height / 2));
   };

   useEffect(() => {
      if (!canvas.current) return;
      setCTX(canvas.current.getContext('2d'));

      const resizeCanvas = () => {
         canvas.current.width = canvas.current.parentNode.clientWidth;
      };

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      return () => window.removeEventListener('resize', resizeCanvas);
   }, [canvas]);

   useEffect(() => {
      let animationID;

      const gameLoop = () => {
         // Check if user scored
         if (ball.x - 10 > canvas.current.width) {
            setIsPlaying(false);
            setLevel((prevLevel) => prevLevel + 1);
            setButtonText(`Start Level ${level + 1}`);
            ball.speed = ball.speed + 3;

            setBall((prevBall) => ({
               ...prevBall,
               x: 50,
               y: 50,
               speed: ballSpeed,
               directionX: 1,
               directionY: 1,
               color: '#000000',
            }));

            setLeftPaddle((prevPaddle) => ({
               ...prevPaddle,
               height: prevPaddle.height + 5,
            }));

            setRightPaddle((prevPaddle) => ({
               ...prevPaddle,
               maxSpeed: prevPaddle.maxSpeed + 0.5,
               speed: prevPaddle.speed + 0.035,
            }));

            return;
         }

         // Check if player loses
         if (ball.x + 10 < 0) {
            setIsPlaying(false);
            setBallSpeed(3);
            setLives((prevLives) => prevLives - 1);
            setBall({
               x: 50,
               y: 50,
               speed: ballSpeed,
               directionX: 1,
               directionY: 1,
               color: '#000000',
            });

            if (lives > 0) {
               setButtonText(() => 'You lost a life. Continue?');
               return;
            }

            setButtonText(() => 'Game over. Try again? (Keeps paddle growth!)');
            setLevel(1);
            setLives((_) => 3);

            setRightPaddle((prevPaddle) => ({
               ...prevPaddle,
               speed: 0.06,
               maxSpeed: 4,
            }));

            return;
         }

         // Move ball
         ball.x += ball.speed * ball.directionX;
         ball.y += ball.speed * ball.directionY;

         const drawPaddles = (leftPaddleColor, rightPaddleColor) => {
            ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
            ctx.fillStyle = leftPaddleColor;
            ctx.fillRect(0, leftPaddle.y, paddleWidth, leftPaddle.height);
            ctx.fillStyle = rightPaddleColor;
            ctx.fillRect(canvas.current.width - paddleWidth, rightPaddle.y, paddleWidth, rightPaddle.height);
         };

         // Draw paddles
         if (ball.x > 0 && ball.x < 50) {
            drawPaddles('#FF35BC', rightPaddle.color);
         } else if (ball.x > canvas.current.width - 50) {
            drawPaddles(leftPaddle.color, '#FF35BC');
         } else {
            drawPaddles(leftPaddle.color, rightPaddle.color);
         }

         // Check collision with paddles
         // prettier-ignore
         if (
            ball.x < paddleWidth && 
            ball.y > leftPaddle.y && 
            ball.y < leftPaddle.y + leftPaddle.height) {
            ball.directionX = 1;
            ball.speed = ball.speed + 0.5;
         } else if (
            ball.x > canvas.current.width - paddleWidth &&
            ball.y > rightPaddle.y &&
            ball.y < rightPaddle.y + rightPaddle.height
         ) {
            ball.speed = ball.speed + 0.5;
            // Add some randomness to the bounces
            if (ball.directionY > 0) {
               ball.directionY = 0.5 + Math.random() * 0.2;
            } else {
               ball.directionY = -(0.5 + Math.random() * 0.2);
            }

            ball.directionX = -1;
         }

         // Check collision with walls
         // prettier-ignore
         if (
            ball.y + ball.speed >= canvas.current.height || 
            ball.y - ball.speed <= 0
         ) {
            ball.directionY = -ball.directionY;
         }

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
         ctx.lineWidth = 3;
         ctx.strokeStyle = '#FF35BC';
         ctx.stroke();

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

   const getWidthPercentage = (speed) => {
      const minSpeed = 3;
      const maxSpeed = 15;

      return ((speed - minSpeed) / (maxSpeed - minSpeed)) * 100;
   };

   return (
      <div className="pong">
         <canvas ref={canvas} width={800} height={500} onMouseMove={handleMouseMove}></canvas>
         <div className="net"></div>
         <div className="overlay">
            <div className="lives">
               Lives:&nbsp;
               {Array(lives)
                  .fill()
                  .map((_, index) => (
                     <div key={`life-key-${index}`}>∆</div>
                  ))}
            </div>
            <div className="ball-speed" aria-label={`Current speed is ${ball.speed}`}>
               <div
                  className={`speed-fill ${!isPlaying ? 'not-playing' : ''}`}
                  aria-hidden="true"
                  style={{ width: `calc(100% - ${getWidthPercentage(ball.speed)}%` }}
               ></div>
               <span>Speed</span>
            </div>
         </div>
         <ul className="level">
            <h3>Level</h3>
            <li className={level === 1 ? 'current' : ''}>
               <div>1</div>
               <span>Trash</span>
            </li>
            <li className={level === 2 ? 'current' : ''}>2</li>
            <li className={level === 3 ? 'current' : ''}>
               <div>3</div>
               <span>Dubbeesy</span>
            </li>
            <li className={level === 4 ? 'current' : ''}>4</li>
            <li className={level === 5 ? 'current' : ''}>
               <div>5</div>
               <span>Hard</span>
            </li>
            <li className={level === 6 ? 'current' : ''}>6</li>
            <li className={level === 7 ? 'current' : ''}>
               <div>7</div>
               <span>Inhuman</span>
            </li>
            <li className={level === 8 ? 'current' : ''}>8</li>
            <li className={level === 9 ? 'current' : ''}>
               <div>9</div>
               <span>Impossible</span>
            </li>
            <li className={level === 10 ? 'current' : ''}>10</li>
         </ul>
         {!isPlaying && (
            <div className="title">
               {!isPlaying && level === 1 && (
                  <>
                     <h2>Pong</h2>
                     <button onClick={updateIsPlaying}>{buttonText}</button>
                  </>
               )}
               {!isPlaying && level > 1 && (
                  <>
                     <h2>Pong</h2>
                     <button onClick={updateIsPlaying}>{buttonText}</button>
                  </>
               )}
            </div>
         )}
      </div>
   );
};

export default Pong;
