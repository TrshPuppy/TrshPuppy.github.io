import Section from "../fragments/section";

export default function Home() {
  return (
    <div>
      <div className="welcome">
        <h1>Welcome to my Trash Heap!</h1>
        <Section
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
    </div>
  );
}
