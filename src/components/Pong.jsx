import React, { useState, useEffect, useRef } from 'react';

const getWidthPercentage = (speed) => {
   const minSpeed = 3;
   const maxSpeed = 15;

   return ((speed - minSpeed) / (maxSpeed - minSpeed)) * 100;
};

const getAudio = (path, volume, loop) => {
   const audio = new Audio(path);
   audio.volume = volume;

   if (loop) {
      audio.loop = true;
   }

   return audio;
};

const sfx = {
   paddle1: getAudio('/audio/pong/paddle1.mp3', 0.6),
   paddle2: getAudio('/audio/pong/paddle2.mp3', 0.6),
   bounce: getAudio('/audio/pong/bounce.mp3', 1),
   music: getAudio('/audio/pong/levelmusic1.mp3', 0.6, true),
   start: getAudio('/audio/pong/gamestart.mp3', 1),
   lost: getAudio('/audio/pong/lost.mp3', 1),
   win: getAudio('/audio/pong/win.mp3', 1),
   gameOver: getAudio('/audio/pong/gameover.mp3', 1),
};

const getRandomColor = () => {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
};

const handleMouseMove = (event, canvas, leftPaddle) => {
   const mouseY = event.clientY - canvas.current.getBoundingClientRect().top;
   leftPaddle.y = Math.max(0, Math.min(canvas.current.height - leftPaddle.height, mouseY - leftPaddle.height / 2));
};

const Pong = () => {
   const canvas = useRef();
   const paddleWidth = 20;
   const [ctx, setCTX] = useState();
   const [buttonText, setButtonText] = useState('Play');
   const [level, setLevel] = useState(1);
   const [lives, setLives] = useState(3);
   let [isPlaying, setIsPlaying] = useState(false); // Let is used becuase we have to force a mutation immediately

   const [ball, setBall] = useState({
      x: 50,
      y: Math.floor(Math.random() * (150 - 40 + 1)) + 40,
      speed: 3,
      directionX: 1,
      directionY: 0.5,
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

            /**
             * Play win sfx
             */
            sfx.win.currentTime = 0;
            sfx.win.play();

            /**
             * Reset state
             */
            setLevel((prevLevel) => prevLevel + 1);
            setButtonText(`Start Level ${level + 1}`);
            setBall((prevBall) => ({
               ...prevBall,
               x: 50,
               y: Math.floor(Math.random() * (150 - 40 + 1)) + 40,
               speed: 3 + level * 0.5,
               directionX: 1,
               directionY: 0.5,
               color: '#000000',
            }));

            setLeftPaddle((prevPaddle) => ({
               ...prevPaddle,
               height: prevPaddle.height + 5,
            }));

            if (level < 7) {
               setRightPaddle((prevPaddle) => ({
                  ...prevPaddle,
                  maxSpeed: prevPaddle.maxSpeed + 0.5,
                  speed: prevPaddle.speed + 0.035,
               }));
            } else {
               setRightPaddle((prevPaddle) => ({
                  ...prevPaddle,
                  maxSpeed: prevPaddle.maxSpeed + 5,
                  speed: prevPaddle.speed + 1,
               }));
            }

            return;
         }

         /**
          * Check if player loses
          */
         if (ball.x + 10 < 0) {
            setIsPlaying(false);
            setLives((prevLives) => prevLives - 1);
            setBall({
               x: 50,
               y: Math.floor(Math.random() * (150 - 40 + 1)) + 40,
               speed: 3,
               directionX: 1,
               directionY: 0.5,
               color: '#000000',
            });

            if (lives > 0) {
               setButtonText(() => 'You lost a life. Continue?');

               /**
                * Handle sfx
                */
               sfx.lost.currentTime = 0;
               sfx.lost.play();
            } else {
               setButtonText(() => 'Game over. Try again?');
               setLevel(1);
               setLives((_) => 3);

               setRightPaddle((prevPaddle) => ({
                  ...prevPaddle,
                  speed: 0.06,
                  maxSpeed: 4,
               }));

               /**
                * Handle sfx
                */
               sfx.music.pause();
               sfx.music.currentTime = 0;
               sfx.gameOver.pause();
               sfx.gameOver.currentTime = 0;
               sfx.gameOver.play();
            }

            return;
         }

         /**
          * Move ball
          */
         ball.x += ball.speed * ball.directionX;
         ball.y += ball.speed * ball.directionY;

         /**
          * Draw Paddles
          */
         const drawPaddles = (leftPaddleColor, rightPaddleColor) => {
            ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
            ctx.fillStyle = leftPaddleColor;
            ctx.fillRect(0, leftPaddle.y, paddleWidth, leftPaddle.height);
            ctx.fillStyle = rightPaddleColor;
            ctx.fillRect(canvas.current.width - paddleWidth, rightPaddle.y, paddleWidth, rightPaddle.height);
         };

         if (ball.x > 0 && ball.x < 50) {
            drawPaddles('#FF35BC', rightPaddle.color);
         } else if (ball.x > canvas.current.width - 50) {
            drawPaddles(leftPaddle.color, '#FF35BC');
         } else {
            drawPaddles(leftPaddle.color, rightPaddle.color);
         }

         /**
          * Check collision with paddles
          */
         const randomPaddleSoundNumber = Math.floor(Math.random() * 2) + 1;
         const currentAudioRef = sfx[`paddle${randomPaddleSoundNumber}`];

         if (ball.x < paddleWidth && ball.y > leftPaddle.y && ball.y < leftPaddle.y + leftPaddle.height) {
            ball.directionX = 1;
            ball.speed = ball.speed + 0.5;
            currentAudioRef.pause();
            currentAudioRef.currentTime = 0;
            currentAudioRef.play();
         } else if (
            ball.x > canvas.current.width - paddleWidth &&
            ball.y > rightPaddle.y &&
            ball.y < rightPaddle.y + rightPaddle.height
         ) {
            ball.speed = ball.speed + 0.5;
            ball.directionX = -1;
            currentAudioRef.pause();
            currentAudioRef.currentTime = 0;
            currentAudioRef.play();
         }

         /**
          * Check collision with walls
          */
         // prettier-ignore
         if (
            ball.y + 10 > canvas.current.height || 
            ball.y - 10 < 0
         ) {
            ball.directionY = -ball.directionY;
            sfx.bounce.pause();
            sfx.bounce.currentTime = 0;
            sfx.bounce.play();
         }

         /**
          * Update right paddle position to follow the ball
          */
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

         /**
          * Draw the ball
          */
         ctx.fillStyle = ball.color;
         ctx.beginPath();
         ctx.arc(ball.x, ball.y, 10, 0, 2 * Math.PI);
         ctx.fill();
         ctx.lineWidth = 6;
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
      if (sfx.music.paused) {
         sfx.music.play();
      }

      sfx.start.pause();
      sfx.start.currentTime = 0;
      sfx.start.play();

      setIsPlaying(true);
   };

   /**
    * Video playback rate
    */

   const videoRef = useRef(null);
   const [videoSpeed, setVideoSpeed] = useState(0.5);

   return (
      <div className="pong">
         <canvas
            ref={canvas}
            width={800}
            height={500}
            onMouseMove={(e) => handleMouseMove(e, canvas, leftPaddle)}
         ></canvas>
         <div className="net"></div>
         <div className="background">
            <video
               ref={videoRef}
               autoPlay
               loop
               muted
               playsInline
               controls={false}
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
               <source src="/video/tunnel.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
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
