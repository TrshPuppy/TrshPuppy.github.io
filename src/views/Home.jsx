import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
   const trafficLights = [
      '#FF5E57',
      '#FEBB2E',
      '#28C740'
   ];

   return (
      <article id="home-view" className="home">
         <div className="terminal">
            <div className="traffic-lights" aria-hidden="true">
               { trafficLights.map((colorIndex, i) => (
                  <div
                     key={ `flashy-${ i }` }
                     className="traffic-light"
                     style={ { color: `${ trafficLights[i] }` } }
                  ></div>
               )) }
            </div>
            <div className="entry-title">
               <h1 className="entry-title">Welcome to the Trash Heap.</h1>
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
