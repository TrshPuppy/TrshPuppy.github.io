import { NavLink } from 'react-router-dom';

//Nav Item SVGs
import CoffeeSVG from './svg/Coffee';
import FlaskSVG from './svg/Flask';
import BlogSVG from './svg/Blog';
import HomeSVG from './svg/Home';
import PawSVG from './svg/Paw';
import DigitalClock from './DigitalClock.jsx';
import SiteBrand from './SiteBrand.jsx';

const Nav = () => {
   return (
      <nav>
         <ul>
            <li key="nav-link-home" className="nav-link-home">
               <NavLink
                  to={'/'}
                  className={({ isActive, isPending }) => {
                     return isActive ? 'nav-link active' : isPending ? 'nav-link pending' : 'nav-link';
                  }}
               >
                  <span>Home</span>
                  <HomeSVG />
               </NavLink>
            </li>
            <li key="nav-link-projects" className="nav-link-projects">
               <NavLink
                  to={'/projects'}
                  className={({ isActive, isPending }) => {
                     return isActive ? 'nav-link active' : isPending ? 'nav-link pending' : 'nav-link';
                  }}
               >
                  <span>Projects</span>
                  <FlaskSVG />
               </NavLink>
            </li>
            <li key="nav-link-blog" className="nav-link-blog">
               <NavLink
                  to={'/blog'}
                  className={({ isActive, isPending }) => {
                     return isActive ? 'nav-link active' : isPending ? 'nav-link pending' : 'nav-link';
                  }}
               >
                  <span>Blog</span>
                  <BlogSVG />
               </NavLink>
            </li>
            <li key="nav-link-about" className="nav-link-about">
               <NavLink
                  to={'/about'}
                  className={({ isActive, isPending }) => {
                     return isActive ? 'nav-link active' : isPending ? 'nav-link pending' : 'nav-link';
                  }}
               >
                  <span>About</span>
                  <PawSVG />
               </NavLink>
            </li>
            <li key="nav-link-contact" className="nav-link-contact">
               <NavLink
                  to={'/contact'}
                  className={({ isActive, isPending }) => {
                     return isActive ? 'nav-link active' : isPending ? 'nav-link pending' : 'nav-link';
                  }}
               >
                  <span>Contact</span>
                  <CoffeeSVG />
               </NavLink>
            </li>
         </ul>
         <div className="nav-meta">
            <DigitalClock />
            <SiteBrand />
         </div>
      </nav>
   );
};

export default Nav;
