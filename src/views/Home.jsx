import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
   function getCurrentDate() {
      const currentDate = new Date();
      const dayOfWeek = currentDate.toLocaleString('en', { weekday: 'short' });
      const month = currentDate.toLocaleString('en', { month: 'short' });
      const dayOfMonth = currentDate.getDate();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');

      return `${dayOfWeek} ${month} ${dayOfMonth} ${hours}:${minutes}:${seconds}`;
   }

   const trafficLights = [
      '#FF5E57',
      '#FEBB2E',
      '#28C740'
   ];

   return (
      <article id="home-view" className="home">
         <div className="terminal">
            <h1>TrshPuppy.github.io</h1>
            <div className="traffic-lights" aria-hidden="true">
               { trafficLights.map((colorIndex, i) => (
                  <div
                     key={ `flashy-${ i }` }
                     className="traffic-light"
                     style={ { color: `${ trafficLights[i] }` } }
                  ></div>
               )) }
            </div>
            <div className="entry-content">
               <span>Last login: {getCurrentDate()}</span>
               <pre aria-hidden="true" className="terminal-text">
                  {
                     `
  _____         _     ____                          
 |_   _| __ ___| |__ |  _ \\ _   _ _ __  _ __  _   _ 
   | || '__/ __| '_ \\| |_) | | | | '_ \\| '_ \\| | | |
   | || |  \\__ \\ | | |  __/| |_| | |_) | |_) | |_| |
   |_||_|  |___/_| |_|_|    \\__,_| .__/| .__/ \\__, |
                                 |_|   |_|    |___/ 
                     `
                  }
               </pre>
               <div className="short-links">
                  <NavLink to={ '/blog' }>
                     <div>My Content</div>
                     <img className="short-link-img" src="/animated/paper.webp" alt="" />
                  </NavLink>
                  <NavLink to={ '/contact' }>
                     <div>Want to Chat?</div>
                     <img className="short-link-img" src="/animated/tp-wag.webp" alt="" />
                  </NavLink>
                  <NavLink to={ '/projects' }>
                     <div>My Projects</div>
                     <img className="short-link-img" src="/animated/dumpster.gif" alt="" />
                  </NavLink>
               </div>
            </div>
            <div className="hero"></div>
         </div>
      </article>
   );
};

export default Home;
