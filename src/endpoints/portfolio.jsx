// import WriteUps from "./writeups";
import { useEffect, useState } from "preact/hooks";
import { Link, Router } from "@reach/router";
// import Coding from "./coding";


export default function Portfolio() {
  return (
    <>
    <div className="section-row" id="port-nav-container">
    <p> /home/trshpuppy/portfolio</p>
      <Link to="coding">
        <button>coding</button>
      </Link>
      <Link to="writeups">
        <button>WriteUps</button>
      </Link>
    </div>      
      <div className="section-column">
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
  )
}













// export default function Portfolio() {
//   const [currentContent, setContent] = useState("portfolio");

//   // useEffect(() => {
//   //   switch(currentContent) {
//   //     case "portfolio":
//   //       return <DefaultContent path="/portfolio" />  // the pathing in index.jsx works but here it doesn't for some reason
//   //     case "writeups":
//   //       return   <WriteUps path="/writeups" />;
//   //     case "coding":
//   //       return <Coding path="/coding"/>;
//   //   }
//   // }, [currentContent])

//   return (
//     <>
//    
//     <Router> 
//       <Coding path="coding" />
      
    
//     </Router>
      
//     </>
//   );
// }

// // Holds the bar just under main nav, buttons for going back and forth
// // between portfolio endpoints
// // Re renders on button click in nav bar
// function PortfolioNav(props) {
//   console.log("RERENDER")
//   const cC = props.currentContent;
//   const sC = props.setContent;
//   const [currentPortfol, setPortContent] = useState("portfolio");

//   switch(cC) {
//     case "portfolio":
//       return(
//         <>
//           <p>
//             /home/trshpuppy
//           </p>
//           <Link to="writeups">
//             <button onClick={() => setPortContent("writeups")} >
//               Writeups
//             </button>
//           </Link>
//           <Link to="coding">
//             <button >
//               Coding
//             </button>
//           </Link>
//         </>
//       )
//       case "writeups":
//         return(
//           <>
//             <p>
//               /home/trshpuppy
//             </p>
//             <Link to="/">
//               <p>/portfolio</p>
//             </Link>
//             <p>
//               writeups
//             </p>
//             <Link to="/">
//               <button onClick={() => setPortContent("portfolio")}>
//                 Back
//               </button>
//             </Link>
//           </>
//         );
//       case "coding":
//         return(
//           <>
//             <p>
//               /home/trshpuppy
//             </p>
//             <Link to="/">
//               <p>/portfolio</p>
//             </Link>
//             <p>
//               coding
//             </p>
//             <Link to="/">
//               <button onClick={() => setPortContent("portfolio")}>
//                 Back
//               </button>
//             </Link>
//           </>
//         );
//       default:
//         return null;
//   }
// }

// // Re-renders when parent (PortfolioNAv) re-renders
// function Content(props) {
//   const sC = props.setContent;
//   const cC = props.currentContent;

//   switch(cC){
//     case "portfolio":
//       return(
//         <>
//           <DefaultContent />        
//         </>
//       )
//       default:
//         return null;
//   }
// }

// function DefaultContent(props) {
//   //return <p>default content</p>;
//   return (
//     <>
//     <div className="section-column" >
//       <h1>Welcome to my Portfolio!</h1>
//         <div id="portfolio-stack-2-context" className="section-row">
//           <img id="portfolio-pant-gif" src="./TP-pant.gif" alt="TP Panting GIF"></img>
//           <div className="section-column">
//             <h2>
//               Here you'll find various writeups and projects I've been working on, all
//               related to cybersecurity and coding!
//             </h2>
//             <p> If you'd like to see cybersecurity writeups & content, cd into `Writeups.' Else, cd into 'Coding.'</p>
//           </div>
//         </div>
//     </div>
//     </>
//   );
// }


