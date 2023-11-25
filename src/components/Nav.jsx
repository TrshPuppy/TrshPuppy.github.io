import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <img src="../../public/img/logo-1.webp" alt="Trash Puppy Logo."/>
            <ul>
                <li>
                    <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to={'/projects'} className="nav-link">Projects</Link>
                </li>
                <li>
                    <Link to={'/about'} className="nav-link">About</Link>
                </li>
                <li>
                    <Link to={'/contact'} className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;