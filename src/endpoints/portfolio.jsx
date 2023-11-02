import WriteUps from "./writeups";
import { useEffect, useState } from "preact/hooks";
import Section from "../fragments/section";
import NavBanner from "../fragments/navbanner";

export default function Portfolio() {
  return (
    <>
      <Nav />
      {/* <Banner />
      <Content /> */}
    </>
  );
}

function Nav() {
  const [currentDir, setCurrentDir] = useState("portfolio");
  console.log("re render nav" + `currentdir is set to ${currentDir}`);

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
        {/* <button id="coding-dir">Coding</button> */}
      </div>
    </>
  );
}

function Banner() {
  // Create state variable:
  const [banner, setBanner] = useState(<DefaultBanner />);

  // Get list of buttonns to changes state and content:
  const subsectionBtns = [
    document.getElementById("writeups-btn"),
    document.getElementById("coding-btn"),
    document.getElementById("back-btn"),
  ];

  for (let butt of subsectionBtns) {
    if (butt === null) {
      setBanner(<DefaultBanner />);
      break;
    }
    butt.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target["id"] == "back-btn") {
        setBanner(<DefaultBanner />);
      } else {
        setBanner(<NavBanner />);
      }
    });
  }

  return banner;
}

function Content() {
  const [content, setContent] = useState(<DefaultContent />);

  // Get list of buttonns to changes state and content:
  const subsectionBtns = [
    document.getElementById("writeups-btn"),
    document.getElementById("coding-btn"),
    document.getElementById("back-btn"),
  ];

  for (let butt of subsectionBtns) {
    if (butt === null) {
      setContent(<DefaultContent />);
      break;
    }
    butt.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target["id"] == "back-btn") {
        setContent(<DefaultContent />);
      } else {
        setContent(<WriteUps />);
      }
    });
  }
  return content;
}

function DefaultBanner() {
  return (
    <>
      <p>default bannder</p>
    </>
  );
  // return (
  //   <div className="context-container">
  //     <Section
  //       tag="writeups"
  //       orientation="row"
  //       chillins={[
  //         {
  //           type: "section",
  //           element: (
  //             <Section
  //               tag="p"
  //               orientation="column"
  //               chillins={[
  //                 {
  //                   type: "p",
  //                   attrs: undefined,
  //                   text: `If you'd like to see cybersecurity writeups and content checkout 'Writeups'. Else, checkout 'Coding'.`,
  //                   child: undefined,
  //                 },
  //               ]}
  //             ></Section>
  //           ),
  //         },
  //       ]}
  //     ></Section>
  //     <Section
  //       tag="linkbox-btn"
  //       orientation="row"
  //       chillins={[
  //         {
  //           type: "a",
  //           attrs: { id: "writeups-btn" },
  //           text: undefined,
  //           child: (
  //             <button type="button">
  //               <img
  //                 id="tp-happy"
  //                 src="./tp-happy.png"
  //                 alt="Trash Puppy Happy"
  //               ></img>
  //             </button>
  //           ),
  //         },
  //         {
  //           type: "p",
  //           attrs: undefined,
  //           text: "Writeups",
  //           child: undefined,
  //         },
  //       ]}
  //     ></Section>
  //     <Section
  //       tag="linkbox-btn"
  //       orientation="row"
  //       chillins={[
  //         {
  //           type: "a",
  //           attrs: { id: "coding-btn" },
  //           text: undefined,
  //           child: (
  //             <button type="button">
  //               <img
  //                 id="tp-happy"
  //                 src="./tp-happy.png"
  //                 alt="Trash Puppy Happy"
  //               ></img>
  //             </button>
  //           ),
  //         },
  //         {
  //           type: "p",
  //           attrs: undefined,
  //           text: "Coding",
  //           child: undefined,
  //         },
  //       ]}
  //     ></Section>
  //   </div>
  // );
}

function DefaultContent(props) {
  return (
    <>
      <p>Default content</p>
    </>
  );
}

/*
Portfolio
  Nav
    starts w/ correct buttons (all) /home/trshpuppy/portfolio
    changes when not default:
      just 'back' button /home/trshpuppy/portfolio/writeups


*/
