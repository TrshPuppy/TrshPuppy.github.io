import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Pong from '../components/Pong';

const Home = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [amountOfFlashies, setAmountOfFlashies] = useState((windowWidth / 2 / 15) * 4);
   const [flashyDec, setFlashyDec] = useState(
      Array.from({ length: amountOfFlashies }, () => Math.floor(Math.random() * 8)),
   );
   const [randomArr] = useState(getRandomIndexArr());
   const [retroColors] = useState([
      '#FF00FF',
      '#9000FF',
      '#6600FF',
      '#00F2FF',
      '#FF4287',
      '#42FFEC',
      '#C2E5CA',
      '#FF0000',
      '#FF249C',
      '#F7FF66',
   ]);

   function handleResize() {
      setWindowWidth(window.innerWidth);
   }

   function getRandomNumber() {
      const randomNumber = Math.random() * 6;
      return Math.floor(randomNumber) + 4;
   }

   useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   useEffect(() => {
      setAmountOfFlashies((windowWidth / 2 / 15) * 4);
      setFlashyDec(Array.from({ length: amountOfFlashies }, () => Math.floor(Math.random() * 8)));
   }, [windowWidth]);

   function getRandomIndexArr() {
      const randomArr = [];

      while (randomArr.length < 2) {
         const index = Math.floor(Math.random() * flashyDec.length);

         if (!randomArr.includes(index)) {
            randomArr.push(index);
         }
      }

      return randomArr;
   }

   return (
      <article id="home-view" className="home">
         <div className="masthead">
            <h1 className="entry-title">
               <div className="flashy-deck" aria-hidden="true">
                  {flashyDec.map((colorIndex, i) => (
                     <div
                        key={`flashy-${i}`}
                        className={`flashy ${randomArr.includes(i) ? 'active' : ''}`}
                        style={{ color: retroColors[colorIndex], animationDuration: `${getRandomNumber()}s` }}
                        onClick={(e) =>
                           e.target.classList.contains('active')
                              ? e.target.classList.remove('active')
                              : e.target.classList.add('active')
                        }
                     ></div>
                  ))}
               </div>

               <h1 className="entry-title">Welcome to the Trash Heap.</h1>
               <div className="short-links">
                  <NavLink to={'/blog'}>My Content</NavLink>
                  <NavLink to={'/contact'}>Want to Chat?</NavLink>
               </div>
            </h1>
            <div className="hero"></div>
         </div>
      </article>
   );
};

export default Home;
