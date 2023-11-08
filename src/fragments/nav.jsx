export default function Nav(props) {
  return (
    <nav>
      <div class="logo">
        <a>
          <img
            id="home-btn"
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
