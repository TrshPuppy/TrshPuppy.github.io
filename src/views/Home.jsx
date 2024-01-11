import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Pong from '../components/Pong';

const Home = () => {
   const [gameStarted, setGameStarted] = useState(false);

   const startGame = () => {
      setGameStarted(true);
   };

   return (
      <article id="home-view" className="home">
         <div className="masthead">
            <h1>
               <div className="title-top">Hey there!</div>
               <div className="title-mid">Welcome to the Trash Heap!</div>
            </h1>
            <div className="hero">
               <img src="animated/tp-peel.webp" />
            </div>
         </div>
         <div className="short-links">
            <NavLink to={'/blog'}>My Content</NavLink>
            <NavLink to={'/contact'}>Want to Chat?</NavLink>
         </div>
         <Pong />
      </article>
   );
};

export default Home;
