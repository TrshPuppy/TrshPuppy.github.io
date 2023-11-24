import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;