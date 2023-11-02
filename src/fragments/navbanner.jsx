import Section from "./section";

function NavBanner() {
  return (
    <>
      <p>nav bannder</p>
      <button id="back-btn">BACK</button>
      <button id="writeups-btn">WRITEUPS</button>
      <button id="coding-btn">CODING</button>
    </>
  );

  //   return (
  //     <div className="linkbox">
  //       <div className="linkbox-container">
  //         <Section
  //           tag="linkbox-btn"
  //           orientation="row"
  //           chillins={[
  //             {
  //               type: "a",
  //               attrs: { id: "writeups-btn" },
  //               text: undefined,
  //               child: (
  //                 <button type="button">
  //                   <img
  //                     id="tp-happy"
  //                     src="./tp-happy.png"
  //                     alt="Trash Puppy Happy"
  //                   ></img>
  //                 </button>
  //               ),
  //             },
  //             {
  //               type: "p",
  //               attrs: undefined,
  //               text: "Writeups",
  //               child: undefined,
  //             },
  //           ]}
  //         ></Section>
  //         <Section
  //           tag="linkbox-btn"
  //           orientation="row"
  //           chillins={[
  //             {
  //               type: "a",
  //               attrs: { id: "coding-btn" },
  //               text: undefined,
  //               child: (
  //                 <button type="button">
  //                   <img
  //                     id="tp-happy"
  //                     src="./tp-happy.png"
  //                     alt="Trash Puppy Happy"
  //                   ></img>
  //                 </button>
  //               ),
  //             },
  //             {
  //               type: "p",
  //               attrs: undefined,
  //               text: "Coding",
  //               child: undefined,
  //             },
  //           ]}
  //         ></Section>
  //       </div>
  //     </div>
  //   );
}

export default NavBanner;
