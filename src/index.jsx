import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import Nav from "./fragments/nav";
import "./assets/style.css";
import Home from "./endpoints/home";
import About from "./endpoints/about";
import Portfolio from "./endpoints/portfolio";
import WriteUps from "./endpoints/writeups";
import Contact from "./endpoints/contact";

function App() {
  return (
    <>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="contentContainer">
        <Content />
      </div>
    </>
  );
}

function Content() {
  const [endPoint, setEndpoint] = useState(<Home />);
  // Create list of buttons for endpoints (in nav bar):
  const navButtons = [
    document.getElementById("portfolio-btn"),
    document.getElementById("home-btn"),
    document.getElementById("contact-btn"),
    document.getElementById("about-btn"),
  ];

  // Add click event to buttons which chases the state for <Content />:
  for (let butt of navButtons) {
    butt.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(`e.target.id = ${e.target.id}`);
      switch (e.target.id) {
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
          setEndpoint(<Home />);
          break;
        default:
          setEndpoint(<Home />);
      }
    });
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
