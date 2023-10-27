export default function Nav(props) {
  return (
    <nav>
      <div class="logo">
        <a href="index">
          <img
            id="logo-pic"
            src="./src/assets/logo.png"
            alt="TrshPuppy logo"
            style="image-rendering: pixelated"
          ></img>
        </a>
      </div>
      <menu>
        <a href="about">
          <button type="button">{"About"}</button>
        </a>
        <a href="contact">
          <button type="button">{"Contact"}</button>
        </a>
        <a href="portfolio">
          <button type="button">{"Portfolio"}</button>
        </a>
      </menu>
    </nav>
  );
}
