import Section from "../fragments/section";

export default function Home() {
  return (
    <>
      <div className="welcome">
        <h1>Welcome to my Trash Heap!</h1>
        <Section
          tag="welcome"
          orientation="row"
          chillins={[
            {
              type: "p",
              attrs: undefined,
              text: "We are currently under construction!",
              child: undefined,
            },
            {
              type: "img",
              attrs: {
                class: "welcome-pic",
                src: "./src/assets/trash-puppy.gif",
                alt: "Trash Puppy Gif",
              },
              text: undefined,
              child: undefined,
            },
          ]}
        ></Section>
      </div>
      <div className="linkbox">
        <Section
          tag="linkbox"
          orientation="column"
          chillins={[
            {
              type: "h2",
              attrs: { class: "context" },
              text: "Here is some trash to sift through:",
              child: undefined,
            },
            {
              type: "p",
              attrs: undefined,
              text: "You may find some treasures!",
              child: undefined,
            },
          ]}
        ></Section>
        <div className="linkbox-container">
          <Section
            tag="linkbox-btn"
            orientation="column"
            chillins={[
              {
                type: "p",
                attrs: undefined,
                text: "Writeups",
                child: undefined,
              },
              {
                type: "a",
                attrs: { href: "writeups" },
                text: undefined,
                child: (
                  <button type="button">
                    <img
                      id="tp-happy"
                      src="./src/assets/tp-happy.png"
                      alt="Trash Puppy Happy"
                    ></img>
                  </button>
                ),
              },
            ]}
          ></Section>
          <Section
            tag="linkbox-btn"
            orientation="column"
            chillins={[
              {
                type: "p",
                attrs: undefined,
                text: "Writeups",
                child: undefined,
              },
              {
                type: "a",
                attrs: { href: "portfolio" },
                text: undefined,
                child: (
                  <button type="button">
                    <img
                      id="tp-happy"
                      src="./src/assets/tp-happy.png"
                      alt="Trash Puppy Happy"
                    ></img>
                  </button>
                ),
              },
            ]}
          ></Section>
          <Section
            tag="linkbox-btn"
            orientation="column"
            chillins={[
              {
                type: "p",
                attrs: undefined,
                text: "Writeups",
                child: undefined,
              },
              {
                type: "a",
                attrs: { href: "portfolio" },
                text: undefined,
                child: (
                  <button type="button">
                    <img
                      id="tp-happy"
                      src="./src/assets/tp-happy.png"
                      alt="Trash Puppy Happy"
                    ></img>
                  </button>
                ),
              },
            ]}
          ></Section>
          <Section
            tag="linkbox-btn"
            orientation="column"
            chillins={[
              {
                type: "p",
                attrs: undefined,
                text: "Writeups",
                child: undefined,
              },
              {
                type: "a",
                attrs: { href: "portfolio" },
                text: undefined,
                child: (
                  <button type="button">
                    <img
                      id="tp-happy"
                      src="./src/assets/tp-happy.png"
                      alt="Trash Puppy Happy"
                    ></img>
                  </button>
                ),
              },
            ]}
          ></Section>
        </div>
      </div>
    </>
  );
}
