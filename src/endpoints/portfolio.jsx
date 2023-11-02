import WriteUps from "./writeups";
import { useEffect, useState } from "preact/hooks";
import Section from "../fragments/section";

export default function Portfolio() {
  return (
    <>
      <Nav />
    </>
  );
}

function Nav() {
  const [currentDir, setCurrentDir] = useState("portfolio");

  useEffect(() => {
    document.addEventListener("click", cd);
  });

  function cd(e) {
    e.preventDefault();

    const targetID = e.target["id"];
    console.log(`target id = ${targetID}`);
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
      case "parent-dir":
        setCurrentDir("portfolio");
        break;
      default:
        break;
    }
    return document.removeEventListener("click", cd);
  }

  return (
    <>
      <div style="display:flex">
        <p>/home/trshpuppy/</p>
        <p id={currentDir == "portfolio" ? "" : "portfolio-dir"}>portfolio/</p>
        <a style="margin:16px; margin-left:0;">
          {currentDir != "portfolio" ? currentDir : ""}
        </a>
        <button id={currentDir == "portfolio" ? "writeups-dir" : "parent-dir"}>
          {currentDir == "portfolio" ? "Writeups" : "Back"}
        </button>
        <button
          id="coding-dir"
          className={currentDir == "portfolio" ? "" : "hidden"}
        >
          {currentDir == "portfolio" ? "Coding" : ""}
        </button>
      </div>
      <Content currentDir={currentDir} />
    </>
  );
}

function Content(props) {
  const [content, setContent] = useState(<DefaultContent />);

  useEffect(() => {
    if (props.currentDir == "portfolio") {
      setContent(<DefaultContent />);
    } else {
      if (props.currentDir == "writeups") {
        setContent(<WriteUps />);
      } else {
        setContent(<p>Coding</p>);
      }
    }
  });

  return content;
}

function DefaultContent(props) {
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
