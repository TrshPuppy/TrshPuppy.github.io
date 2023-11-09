import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import Nav from "./fragments/nav";
import "./assets/style.css";
import Home from "./endpoints/home";
import About from "./endpoints/about";
import Portfolio from "./endpoints/portfolio";
import Contact from "./endpoints/contact";

function App() {
  return (
    <>
      <div id="nav-container" className="nav-container">
        <Nav />
      </div>
      <div id="content-container" className="contentContainer">
        <Content />
      </div>
    </>
  );
}

function Content() {
  const [endPoint, setEndpoint] = useState(<Home />);
  const navArea = document.getElementById("nav-container");
  const linkboxArea = document.querySelector(".linkbox-container");

  useEffect(() => {
    navArea.addEventListener("click", handleNavAreaClick);
  }, []);

  // useEffect(() => {
  //   linkboxArea.addEventListener("click", handleLinkboxClick);
  // }, []);

  function handleNavAreaClick(e) {
    e.preventDefault();
    console.log("click from index.tsx" + `target = ${e.target["id"]}`);

    switch (e.target["id"]) {
      case "portfolio-btn":
        setEndpoint(<Portfolio />);
        break;
      case "about-btn":
        setEndpoint(<About />);
        break;
      case "contact-btn":
        setEndpoint(<Contact />);
        break;
      case "home-btn":
        setEndpoint(<Home handleClickCB={handleLinkboxClick} />);
        break;
      default:
        return;
    }
  }

  function handleLinkboxClick(e) {
    e.preventDefault();
    console.log("click from index.tsx" + `target = ${e.target["id"]}`);

    switch (e.target["id"]) {
      case "paper-gif":
        setEndpoint(<Portfolio />);
        break;
      case "tp-wag-gif":
        setEndpoint(<About />);
        break;
      case "star-gif":
        setEndpoint(<Contact />);
        break;
      default:
        return;
    }
  }

  return endPoint;
}

render(<App />, document.getElementById("app"));

/*
BASIC HTML STRUCTURE:
	Nav bar  <----always the same
		logo
		about
		home
	Section <---- different but mostly the same (image + description p)
	Section <------ differs
		About:
			description
			link bar
		Contact
			grid of contact buttons w/ images
		Portfolio
			list of writeups
	...
	Footer


*/
