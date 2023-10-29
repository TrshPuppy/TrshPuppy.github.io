export default function Nav(props) {
  return (
    <nav>
      <div id="home-btn" class="logo">
        <a href="/">
          <img
            id="logo-pic"
            src="./logo.png"
            alt="TrshPuppy logo"
            style="image-rendering: pixelated"
          ></img>
        </a>
      </div>
      <menu>
        <a href="">
          <button id="portfolio-btn" type="button">
            {"Portfolio"}
          </button>
        </a>
        <a href="">
          <button id="about-btn" type="button">
            {"About"}
          </button>
        </a>
        <a href="">
          <button id="contact-btn" type="button">
            {"Contact"}
          </button>
        </a>
      </menu>
    </nav>
  );
}
