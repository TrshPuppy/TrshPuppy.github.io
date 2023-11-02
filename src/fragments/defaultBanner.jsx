import Section from "./section";

function DefaultBanner() {
  return (
    <>
      <p>default bannder</p>
      <button id="back-btn">BACK</button>
      <button id="writeups-btn">WRITEUPS</button>
      <button id="coding-btn">CODING</button>
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

export default DefaultBanner;
