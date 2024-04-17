import { NavLink } from 'react-router-dom';
import FlaskSVG from './svg/Flask.jsx';
import BlogSVG from './svg/Blog.jsx';
import PawSVG from './svg/Paw.jsx';
import CoffeeSVG from './svg/Coffee.jsx';

const HomeLinks = () => {
   return (
      <div className="home-links">
         <div className="card">
            <div className="hero hero-projects" aria-hidden="true">
               <FlaskSVG />
            </div>
            <div className="description">
               <h3>Projects</h3>
               <p>
                  All of my github projects.
               </p>
               <NavLink to={ '/projects' }>
                  <div>View</div>
               </NavLink>
            </div>
         </div>

         <div className="card">
            <div className="hero hero-blog" aria-hidden="true">
               <BlogSVG />
            </div>
            <div className="description">
               <h3>Blog</h3>
               <p>
                  Original content about hacker stuff.
               </p>
               <NavLink to={ '/blog' }>
                  <div>View</div>
               </NavLink>
            </div>
         </div>

         <div className="card">
            <div className="hero hero-about" aria-hidden="true">
               <PawSVG />
            </div>
            <div className="description">
               <h3>About</h3>
               <p>
                  Learn more about TrshPuppy herself!
               </p>
               <NavLink to={ '/about' }>
                  <div>View</div>
               </NavLink>
            </div>
         </div>

         <div className="card">
            <div className="hero hero-contact" aria-hidden="true">
               <CoffeeSVG />
            </div>
            <div className="description">
               <h3>Contact</h3>
               <p>
                  Get in touch!
               </p>
               <NavLink to={ '/contact' }>
                  <div>View</div>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default HomeLinks;