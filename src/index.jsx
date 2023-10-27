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
    <div>
      <Nav />
      <Content />
    </div>
  );
}

function Content() {
  const [endPoint, setEndpoint] = useState("index");

  const onURLChange = () => {
    const currentURL = window.location.href.split("/")[3];
    setEndpoint(currentURL);
    return;
  };

  useEffect(() => {
    window.addEventListener("load", onURLChange);
    return () => window.removeEventListener("load", onURLChange);
  }, []);

  switch (endPoint) {
    case "index":
      return <Home />;
    case "portfolio":
      return <Portfolio />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
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
