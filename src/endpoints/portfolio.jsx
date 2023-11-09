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
  const contentContainer = document.querySelector(".contentContainer");
  // console.log(`CURRENT DIR + ${currentDir}`);

  useEffect(() => {
    contentContainer.addEventListener("click", cd);
  }, []);

  function cd(e) {
    e.preventDefault();

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
      <div className="port-nav-container" style="display:flex">
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
      <div className="port-content-container">
        <DefaultContent />
      </div>
    );
  } else {
    if (props.currentDir == "writeups") {
      return (
        <div className="port-content-container">
          <WriteUps />
        </div>
      );
    } else {
      return (
        <div className="port-content-container">
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
      <h1>Welcome to my Portfolio!</h1>
      <h2>
        {" "}
        Here you'll find various writeups and projects I've been working on, all
        related to cybersecurity and coding!
      </h2>
      <div className="context-container">
        <Section
          tag="writeups"
          orientation="row"
          chillins={[
            {
              type: "section",
              element: (
                <Section
                  tag="p"
                  orientation="column"
                  chillins={[
                    {
                      type: "p",
                      attrs: undefined,
                      text: `If you'd like to see cybersecurity writeups and content change directory into 'Writeups'. Else, cd into 'Coding'.`,
                      child: undefined,
                    },
                  ]}
                ></Section>
              ),
            },
          ]}
        ></Section>
      </div>
    </>
  );
}
