import { Link } from "@reach/router";

export default function Nav(props) {
  return (
    <nav id="main-nav">
      <div id="logo-div">
        <a>
          <img
            id="home-btn"
            src="./logo2.png"
            alt="TrshPuppy logo"
            style="image-rendering: pixelated"
          ></img>
        </a>
      </div>
      <menu id='main-nav-menu'>
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
          <button id="contact-btn" type="button">
            {"Contact"}
          </button>
        </a>
      </menu>
    </nav>
  );
}
