import WriteUps from "./writeups";
import { useEffect, useState } from "preact/hooks";
import Section from "../fragments/section";


export default function Portfolio() {
  return (
    <>
      <PortfolioNav />
    </>
  );
}

// Holds the bar just under main nav, buttons for going back and forth
// between portfolio endpoints
// Re renders on button click in nav bar
function PortfolioNav() {
  const [currentDir, setCurrentDir] = useState("portfolio");
  const contentContainer = document.querySelector(".content-container");

  useEffect(() => {
    contentContainer.addEventListener("click", cd);
  }, []);

  function cd(e) {
    // e.preventDefault();

    const targetID = e.target["id"];
    switch (targetID) {
      case "writeups-dir":
        setCurrentDir("writeups");
        break;
      case "coding-dir":
        setCurrentDir("coding");
        break;
      case "portfolio-dir":
        setCurrentDir("portfolio");
        break;
      case "portfolio-path-dir":
        setCurrentDir("portfolio");
        break;
      default:
        return;
    }
  }

  return (
    <>
      <div id="port-nav-container" className="content-stack-top" style="display:flex">
        <p>/home/trshpuppy/</p>
        <p
          id={currentDir === "portfolio" ? "" : "portfolio-path-dir"}
          className={currentDir === "portfolio" ? "" : "portfolio-nav-btn"}
        >
          portfolio/
        </p>
        <a style="margin:16px; margin-left:0;">
          {currentDir != "portfolio" ? currentDir : ""}
        </a>
        <button
          id={
            currentDir === "portfolio" ? "writeups-dir" : "portfolio-path-dir"
          }
          className="portfolio-nav-btn"
        >
          {currentDir == "portfolio" ? "Writeups" : "Back"}
        </button>
        <button
          id="coding-dir"
          className={
            currentDir === "portfolio" ? "portfolio-nav-btn" : "hidden"
          }
        >
          {currentDir == "portfolio" ? "Coding" : ""}
        </button>
      </div>
      <Content currentDir={currentDir} />
    </>
  );
}

// Re-renders when parent (PortfolioNAv) re-renders
function Content(props) {
  if (props.currentDir == "portfolio") {
    return (
      <div id="port-content-container" className="content-stack-2">
        <DefaultContent />
      </div>
    );
  } else {
    if (props.currentDir == "writeups") {
      return (
        <div id="writeups-content-container" className="content-stack-2">
          <WriteUps />
        </div>
      );
    } else {
      return (
        <div id="conding-content-container" className="content-stack-2">
          <p>Coding</p>
        </div>
      );
    }
  }

  return <DefaultContent />;
}

function DefaultContent(props) {
  //return <p>default content</p>;
  return (
    <>
    <div className="section-column" >
      <h1>Welcome to my Portfolio!</h1>
        <div id="portfolio-stack-2-context" className="section-row">
          <img id="portfolio-pant-gif" src="./TP-pant.gif" alt="TP Panting GIF"></img>
          <div className="section-column">
            <h2>
              Here you'll find various writeups and projects I've been working on, all
              related to cybersecurity and coding!
            </h2>
            <p> If you'd like to see cybersecurity writeups & content, cd into `Writeups.' Else, cd into 'Coding.'</p>
          </div>
        </div>
    </div>
    </>
  );
}
