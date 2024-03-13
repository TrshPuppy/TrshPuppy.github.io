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
                  thing
               </p>
            </div>
            <NavLink to={ '/projects' }>
               <div>View</div>
            </NavLink>
         </div>

         <div className="card">
            <div className="hero hero-blog" aria-hidden="true">
               <BlogSVG />
            </div>
            <div className="description">
               <h3>Blog</h3>
               <p>
                  Thing
               </p>
            </div>
            <NavLink to={ '/blog' }>
               <div>View</div>
            </NavLink>
         </div>

         <div className="card">
            <div className="hero hero-about" aria-hidden="true">
               <PawSVG />
            </div>
            <div className="description">
               <h3>About</h3>
               <p>
                  Thing
               </p>
            </div>
            <NavLink to={ '/about' }>
               <div>View</div>
            </NavLink>
         </div>

         <div className="card">
            <div className="hero hero-contact" aria-hidden="true">
               <CoffeeSVG />
            </div>
            <div className="description">
               <h3>Contact</h3>
               <p>
                  thing
               </p>
            </div>
            <NavLink to={ '/contact' }>
               <div>View</div>
            </NavLink>
         </div>
      </div>
   );
};

export default HomeLinks;