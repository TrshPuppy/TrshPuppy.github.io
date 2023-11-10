import { render } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import Nav from "./fragments/nav";
import 'normalize.css';
import "./assets/style.css"; // import after normalize.css
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
      <div className="content-container">
        <Content />
      </div>
    </>
  );
}

function Content() {
  const [endPoint, setEndpoint] = useState('Home');
  const navArea = useRef(null);
  const linkboxArea = useRef(null);

  useEffect(() => {
    linkboxArea.current = document.querySelector(".linkbox-container");
    navArea.current = document.getElementById("nav-container");
    
    if (navArea.current) {
      // console.log("Nav Area exists")
      navArea.current.addEventListener("click", handleNavAreaClick);
    }

    if(linkboxArea.current){
      // console.log("linkbox exists")
      linkboxArea.current.addEventListener("click", handleLinkboxClick);
    }

    return () => {
      if (navArea.current) {
        navArea.current.removeEventListener("click", handleNavAreaClick);
      }

      if (linkboxArea.current) {
        linkboxArea.current.removeEventListener("click", handleLinkboxClick);
      }
    };
 
  }, [endPoint]);

  function handleNavAreaClick(e) {
    // e.preventDefault();
    // console.log("click from index.tsx" + `target = ${e.target["id"]}`);
    switch (e.target["id"]) {
      case "portfolio-btn":
        setEndpoint('Portfolio');
        break;
      case "about-btn":
        setEndpoint('About');
        break;
      case "contact-btn":
        setEndpoint('Contact');
        break;
      default:
        setEndpoint('Home');
    }
  }

  function handleLinkboxClick(e){
    // console.log("linkbox click")
    // e.preventDefault();
    // console.log("click from index.tsx" + `target = ${e.target["id"]}`);
    switch (e.target["id"]) {
      case "paper-gif":
        setEndpoint('Portfolio');
        break;
      case "tp-wag-gif":
        setEndpoint('About');
        break;
      case "star-gif":
        setEndpoint('Contact');
        break;
      default:
        setEndpoint('Home');
    }
  }

  let ComponentToRender;
  switch (endPoint) {
    case 'Portfolio':
      ComponentToRender = Portfolio;
      break;
    case 'About':
      ComponentToRender = About;
      break;
    case 'Contact':
      ComponentToRender = Contact;
      break;
    default:
      ComponentToRender = Home;
  }

  return (
        <ComponentToRender />
  );
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
