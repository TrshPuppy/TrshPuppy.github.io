import WriteUps from "./writeups";
import { useEffect, useState } from "preact/hooks";
import Section from "../fragments/section";
import NavBanner from "../fragments/navbanner";
import DefaultBanner from "../fragments/defaultBanner";

export default function Portfolio() {
  // Create state variable:
  const [subsection, setSubsection] = useState("default");

  return (
    <>
      <div className="welcome writeups">
        <h1>Hacking & Cybersec Writeups</h1>
        <h2>Welcome to the dark side!</h2>
        <Banner currentView={subsection} />
        <PortfolioSubsection />
      </div>
    </>
  );
}

function PortfolioSubsection(props) {
  // Create list of buttons w/ subsection endpoints:
  // const subsectionButtons = [
  //   document.getElementById("writeups-btn"),
  //   document.getElementById("coding-btn"),
  // ];

  // Add event listeners to change state:
  // for (let butt of subsectionButtons) {
  //   if (butt == null) {
  //     setSubsection(<PortfolioBase />);
  //   }
  //   butt.addEventListener("click", (e) => {
  //     e.preventDefault();

  //     switch (e.target["id"]) {
  //       case "writeups-btn":
  //         setSubsection(<WriteUps />);
  //         break;
  //       case "coding-btn":
  //         setSubsection(<Coding />);
  //         break;
  //       default:
  //         setSubsection(<PortfolioBase />);
  //         break;
  //     }
  //   });
  // }
  return <p>Subsection</p>;
}

function Banner(props) {
  console.log(`props current view = ${props.currentView}`);
  return props.currentView == "default" ? <DefaultBanner /> : <NavBanner />;
  // const [currentBanner, setCurrentBanner] = useState(<DefaultBanner />);

  // if (props.currentView == "default") {
  //   setCurrentBanner(<DefaultBanner />);
  // } else {
  //   setCurrentBanner(<NavBanner />);
  // }
  // return currentBanner;
  // const DefaultBanner = () => {

  //   return (
  //     <div className="context-container">
  //       <Section
  //         tag="writeups"
  //         orientation="row"
  //         chillins={[
  //           {
  //             type: "img",
  //             attrs: {
  //               class: "welcome-pic",
  //               src: "./trash-puppy.gif",
  //               alt: "Trash Puppy Gif",
  //             },
  //             text: undefined,
  //             child: undefined,
  //           },
  //           {
  //             type: "section",
  //             element: (
  //               <Section
  //                 tag="p"
  //                 orientation="column"
  //                 chillins={[
  //                   {
  //                     type: "p",
  //                     attrs: undefined,
  //                     text: "This is a collection of my writeups for various Capture the Flags (CTFs) & other hacking endeavors. Some come from Hack the Box, others from more obscure places...",
  //                     child: undefined,
  //                   },
  //                   {
  //                     type: "p",
  //                     attrs: { class: "bold" },
  //                     text: "ENJOY!",
  //                     child: undefined,
  //                   },
  //                 ]}
  //               ></Section>
  //             ),
  //           },
  //         ]}
  //       ></Section>
  //     </div>
  //   );
  // };

  // const NavBanner = () => {
  //   return (
  //     <div className="context-container">
  //       <Section
  //         tag="writeups"
  //         orientation="row"
  //         chillins={[
  //           {
  //             type: "section",
  //             element: (
  //               <Section
  //                 tag="p"
  //                 orientation="column"
  //                 chillins={[
  //                   {
  //                     type: "p",
  //                     attrs: undefined,
  //                     text: "This is a collection of my writeups for various Capture the Flags (CTFs) & other hacking endeavors. Some come from Hack the Box, others from more obscure places...",
  //                     child: undefined,
  //                   },
  //                   {
  //                     type: "p",
  //                     attrs: { class: "bold" },
  //                     text: "ENJOY!",
  //                     child: undefined,
  //                   },
  //                 ]}
  //               ></Section>
  //             ),
  //           },
  //           {
  //             type: "section",
  //             element: (
  //               <div className="linkbox-container">
  //                 <Section
  //                   tag="writeup-btn"
  //                   orientation="row"
  //                   chillins={[
  //                     {
  //                       type: "a",
  //                       attrs: { id: "writeups-btn" },
  //                       text: undefined,
  //                       child: (
  //                         <button type="button">
  //                           <img
  //                             id="tp-happy"
  //                             src="./tp-happy.png"
  //                             alt="Trash Puppy Happy"
  //                           ></img>
  //                         </button>
  //                       ),
  //                     },
  //                     {
  //                       type: "p",
  //                       attrs: undefined,
  //                       text: "Writeups",
  //                       child: undefined,
  //                     },
  //                   ]}
  //                 ></Section>
  //               </div>
  //             ),
  //           },
  //         ]}
  //       ></Section>
  //     </div>
  //   );
  // };

  // const [currentContent, setContent] = useState(<DefaultBanner />);

  // switch (props) {
  //   case (<PortfolioBase />):
  //     setContent(<DefaultBanner />);
  //     break;
  //   case (<PortfolioSubsection />):
  //     setContent(<NavBanner />);
  //     break;
  //   default:
  //     setContent(<DefaultBanner />);
  //     break;
  // }

  // return currentContent;
  // return <p>context nav bar</p>;
}

function PortfolioBase(props) {
  return <p>Portfolio base</p>;
}
