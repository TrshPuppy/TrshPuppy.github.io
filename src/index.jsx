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
  const [endPoint, setEndpoint] = useState("home");
  const navButtons = [
    document.getElementById("portfolio-btn"),
    document.getElementById("home-btn"),
    document.getElementById("contact-btn"),
    document.getElementById("about-btn"),
  ];

  const onURLChange = (e, setEndpoint) => {
    switch (e.target.id) {
      case "portfolio-btn":
        setEndpoint("portfolio");
        break;
      case "home-btn":
        setEndpoint("home");
        break;
      case "contact-btn":
        setEndpoint("conmtact");
        break;
      case "about-btn":
        setEndpoint("about");
        break;
      default:
        setEndpoint("home");
        break;
    }
    return;
  };

  useEffect(() => {
    const butt = document.getElementById("portfolio-btn");
    butt.addEventListener("click", onURLChange);

    return butt;
  }, [setEndpoint]);

  switch (endPoint) {
    case "home":
      return <Home />;
    case "portfolio":
      return <Portfolio />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    case "writeups":
      return <WriteUps />;
    default:
      return <Home />;
  }
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
