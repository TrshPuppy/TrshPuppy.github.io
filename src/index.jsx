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
import WriteUpHome from "./endpoints/writeups";
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
          <About path="about" />
          <Contact path="contact" />
          <Portfolio path="portfolio" >
            <Coding path="coding" />
            <WriteUps path="writeups">
              <WriteUpHome path="/" />
              <CurrentWriteUp path="/academy" />  
            </WriteUps>
          </Portfolio>
        </Router>
      </div>
    </>
  );
}

function WriteUps(props) {
  return(<div>{props.children}</div>)
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
