import { Link } from "@reach/router";

export default function Nav(props) {
    return (
        <nav id="main-nav">
            <div id="logo-div">
                <a>
                    <Link to="/">
                        <img
                            id="home-btn"
                            src="./logo2.png"
                            alt="TrshPuppy logo"
                            style="image-rendering: pixelated"
                        ></img>
                    </Link>
                </a>
            </div>
            <menu id="main-nav-menu">
                <Link to="/portfolio">
                    <button id="portfolio-btn" type="button">
                        {"Portfolio"}
                    </button>
                </Link>
                <Link to="/about">
                    <button id="about-btn" type="button">
                        {"About"}
                    </button>
                </Link>
                <a>
                    <Link to="/contact">
                        <button id="contact-btn" type="button">
                            {"Contact"}
                        </button>
                    </Link>
                </a>
            </menu>
        </nav>
    );
}
