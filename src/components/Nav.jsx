import { NavLink } from "react-router-dom";
import CoffeeSVG from "./svg/Coffee.jsx";
import FlaskSVG from "./svg/Flask.jsx";
import HomeSVG from "./svg/Home.jsx";
import PawSVG from "./svg/Paw.jsx";

const Nav = () => {
    return (
        <nav>
            <img src="../../public/img/logo-1.webp" alt="Trash Puppy Logo."/>
            <ul>
                <li key="nav-link-home">
                    <NavLink
                        to={ '/' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>Home</span>
                        <HomeSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-projects">
                    <NavLink
                        to={ '/projects' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>Projects</span>
                        <FlaskSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-about">
                    <NavLink
                        to={ '/about' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>About</span>
                        <PawSVG/>
                    </NavLink>
                </li>
                <li key="nav-link-contact">
                    <NavLink
                        to={ '/contact' }
                        className={({ isActive, isPending }) => {
                            return isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link";
                        }}
                    >
                        <span>Contact</span>
                        <CoffeeSVG/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;