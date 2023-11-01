import Section from "./section";

function DefaultBanner() {
  return (
    <div className="context-container">
      <Section
        tag="writeups"
        orientation="row"
        chillins={[
          {
            type: "img",
            attrs: {
              class: "welcome-pic",
              src: "./trash-puppy.gif",
              alt: "Trash Puppy Gif",
            },
            text: undefined,
            child: undefined,
          },
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
                    text: "This is a collection of my writeups for various Capture the Flags (CTFs) & other hacking endeavors. Some come from Hack the Box, others from more obscure places...",
                    child: undefined,
                  },
                  {
                    type: "p",
                    attrs: { class: "bold" },
                    text: "ENJOY!",
                    child: undefined,
                  },
                ]}
              ></Section>
            ),
          },
        ]}
      ></Section>
    </div>
  );
}

export default DefaultBanner;
