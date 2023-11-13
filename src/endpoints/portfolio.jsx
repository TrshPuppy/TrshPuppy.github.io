import WriteUps from "./writeups";
import { useEffect, useState } from "preact/hooks";



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
  let currentWriteupName = "";
  console.log(`currentDir = ${currentDir}`);

  useEffect(() => {
    console.log("HEY I CLICKED")
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
      case "writeups-path-dir":
        setCurrentDir("writeups");
        break;
      case "current-writeup":
        currentWriteupName = e.target["name"]; // this should be changed probs
        setCurrentDir("current-writeup");
      default:
        return;
    }
  }

  // Build portfolio nav bar (default values first):
  const portNavContainer = {
    id: "port-nav-container",
    class: "content-stack-top",
    p: {
      id: "",
      class: "",
      text: "portfolio/"
    },
    a: {
      text: currentDir,
    },
    button1: {
      id: "writeups-dir",
      class: "portfolio-nav-btn",
      text: "Writeups",
    },
    button2: {
      id: "coding-dir",
      class: "portfolio-nav-btn",
      text: "Coding",
    }
  }

  switch (currentDir) {
    case "portfolio":
      portNavContainer.p.id = "";
      portNavContainer.p.class = "";
      
      portNavContainer.a.text = "";
      
      portNavContainer.button1.id = "writeups-dir";
      portNavContainer.button1.text = "Writeups";
      
      // portNavContainer.button2.id = "coding-dir"; // only has one setting for now
      portNavContainer.button2.class = "portfolio-nav-btn";
      portNavContainer.button2.text = "Coding";
      break;
    case "writeups":
      portNavContainer.p.id = "portfolio-path-dir";
      portNavContainer.p.class = "portfolio-nav-btn";
      
      portNavContainer.a.text = currentDir;
      
      portNavContainer.button1.id = "portfolio-path-dir";
      portNavContainer.button1.text = "Back";

      portNavContainer.button2.class = "hidden";
      portNavContainer.button2.text = "";
      break;
    case "coding":
      portNavContainer.p.id = "portfolio-path-dir";
      portNavContainer.p.class = "portfolio-nav-btn";
      
      portNavContainer.a.text = currentDir;
      
      portNavContainer.button1.id = "portfolio-path-dir";
      portNavContainer.button1.text = "Back";

      portNavContainer.button2.class = "hidden";
      portNavContainer.button2.text = "";
      break;
    case "current-writeup":
      portNavContainer.p.text = "portfolio/writeups";
      
      portNavContainer.a.text = currentWriteupName; // this needs to be the name of the current writeup

      portNavContainer.button1.id = "writeups-path-dir"
      portNavContainer.button1.text = "Back";

      portNavContainer.button2.class = "hidden";
      portNavContainer.button2.text = "";
      break;
    }

  return (
    <>
      <div id={portNavContainer.id} className={portNavContainer.class}>
        <p>/home/trshpuppy/</p>
        <p
          id={portNavContainer.p.id}
          className={portNavContainer.p.class}
        >
          {portNavContainer.p.text}
        </p>
        <a >
          {portNavContainer.a.text}
        </a>
        <button
          id={portNavContainer.button1.id}          
          className={portNavContainer.button1.class}
        >
          {portNavContainer.button1.text}
        </button>
        <button
          id={portNavContainer.button2.id}
          className={portNavContainer.button2.class}
        >
          {portNavContainer.button2.text}
        </button>
      </div>
      <Content currentDir={currentDir} setCurrentDir={setCurrentDir} />
    </>
  );
}

// Re-renders when parent (PortfolioNAv) re-renders
function Content(props) {

  switch (props.currentDir) {
    case "portfolio":
      return (
        <div id="port-content-container" className="content-stack-2">
          <DefaultContent />
        </div>
      );
    case "writeups":
      return (
        <div id="writeups-content-container" className="content-stack-2">
          <WriteUps />
        </div>
      );
    case "coding":
      return (
        <div id="coding-content-container" className="content-stack-2">
          <p>Coding</p>
        </div>
      );
    case "current-writeup":
      return (
        <div id="current-writeup-content-container" className="content-stack-2">
          <WriteUps setCurrentDir={props.setCurrentDir}/>
        </div>
      );
  }

  //  if (props.currentDir == "portfolio") {
  //   return (
  //     <div id="port-content-container" className="content-stack-2">
  //       <DefaultContent />
  //     </div>
  //   );
  // } else {
  //   if (props.currentDir == "writeups") {
  //     return (
  //       <div id="writeups-content-container" className="content-stack-2">
  //         <WriteUps />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div id="conding-content-container" className="content-stack-2">
  //         <p>Coding</p>
  //       </div>
  //     );
  //   }
  // }

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
