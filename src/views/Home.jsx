import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Terminal from '../components/Terminal.jsx';
import Socials from '../components/Socials.jsx';

const Home = () => {
   return (
      <article id="home-view" className="home view">
         <Terminal windowTitle="TrshPuppy.github.io">
            <section>
               <div className="terminal-entry">
                  <div className="sparkles"></div>
                  <div>
                     <h2>Welcome to the Trash Heap!</h2>
                     <small>Here is some trash to sift through. You may find some treasures!</small>
                     <p>
                        
                     </p>
                  </div>
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