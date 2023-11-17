import { render } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { Router } from "@reach/router";

import Nav from "./fragments/nav";

import 'normalize.css';
import "./assets/style.css"; // import after normalize.css

import Portfolio from "./endpoints/portfolio";
import Home from "./endpoints/home";
import About from "./endpoints/about";
import Contact from "./endpoints/contact";
import Coding from "./endpoints/coding";
import WriteUps from "./endpoints/writeups";
import CurrentWriteUp from "./endpoints/currentWriteup";

function App() {
  return (
    <>
      <div id="nav-container" className="nav-container">
        <Nav />
      </div>
      <div className="content-container">
        <Router>
          <Home path="/" />
          <Portfolio path="portfolio" />
          <Coding path="portfolio/coding" />
          <About path="about" />
          <Contact path="contact" />
          <WriteUps path="portfolio/writeups">
            <CurrentWriteUp path="/" />  
          </WriteUps>
            
        </Router>
      </div>
    </>
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
