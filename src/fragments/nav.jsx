export default function Nav(props) {
  return (
    <nav>
      <div id="home-btn" class="logo">
        <a>
          <img
            id="logo-pic"
            src="./logo.png"
            alt="TrshPuppy logo"
            style="image-rendering: pixelated"
          ></img>
        </a>
      </div>
      <menu>
        <a>
          <button id="portfolio-btn" type="button">
            {"Portfolio"}
          </button>
        </a>
        <a>
          <button id="about-btn" type="button">
            {"About"}
          </button>
        </a>
        <a>
          <button id="contact-btn" type="button">
            {"Contact"}
          </button>
        </a>
      </menu>
    </nav>
  );
}
