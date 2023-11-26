import { Link } from "react-router-dom";
import CoffeeSVG from "./svg/Coffee.jsx";
import FlaskSVG from "./svg/Flask.jsx";
import HomeSVG from "./svg/Home.jsx";
import PawSVG from "./svg/Paw.jsx";

const Nav = () => {
    return (
        <nav>
            <img src="../../public/img/logo-1.webp" alt="Trash Puppy Logo."/>
            <ul>
                <li>
                    <Link to={ '/' } className="nav-link">
                        <span>Home</span>
                        <HomeSVG/>
                    </Link>
                </li>
                <li>
                    <Link to={ '/projects' } className="nav-link">
                        <span>Projects</span>
                        <FlaskSVG/>
                    </Link>
                </li>
                <li>
                    <Link to={ '/about' } className="nav-link">
                        <span>About</span>
                        <PawSVG/>
                    </Link>
                </li>
                <li>
                    <Link to={ '/contact' } className="nav-link">
                        <span>Contact</span>
                        <CoffeeSVG/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;