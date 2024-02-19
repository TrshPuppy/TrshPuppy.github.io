import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Terminal from '../components/Terminal.jsx';
import Socials from '../components/Socials.jsx';

const Home = () => {
   function getCurrentDate() {
      const currentDate = new Date();
      const dayOfWeek = currentDate.toLocaleString('en', { weekday: 'short' });
      const month = currentDate.toLocaleString('en', { month: 'short' });
      const dayOfMonth = currentDate.getDate();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');

      return `${ dayOfWeek } ${ month } ${ dayOfMonth } ${ hours }:${ minutes }:${ seconds }`;
   }

   return (
      <article id="home-view" className="home">
         <Terminal windowTitle="TrshPuppy.github.io">
            <section>
               <div className="terminal-entry">
                  <div className="sparkles"></div>
                  Welcome to the Trash Heap!
               </div>
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
               <Socials />
            </section>
            <div className="hero"></div>
         </Terminal>
      </article>
   )
      ;
};

export default Home;
