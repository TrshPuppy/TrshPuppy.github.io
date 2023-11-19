// @ts-nocheck
import { render } from "preact";
import { Router } from "@reach/router";

import Nav from "./fragments/nav";

import "normalize.css";
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
                    <WriteUps path="portfolio/writeups" />
                    <CurrentWriteUp path="portfolio/writeups/academy" />
                    <CurrentWriteUp path="portfolio/writeups/HTB-vaccine" />
                    <CurrentWriteUp path="portfolio/writeups/binary-exploitation" />
                </Router>
            </div>
        </>
    );
}

render(<App />, document.getElementById("app"));
