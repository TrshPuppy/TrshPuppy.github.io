import Section from "../fragments/section";
import { Link } from "@reach/router";

export default function Home(props) {
    const handleClick = props.handleClickCB;

    return (
        <>
            <div className="content-stack-top" id="home-stack-top">
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
                                src: "./trash-puppy.gif",
                                alt: "Trash Puppy Gif",
                            },
                            text: undefined,
                            child: undefined,
                        },
                    ]}
                ></Section>
            </div>
            <div className="content-stack-2" id="home-stack-2">
                <Section
                    tag="stack-2"
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
                <div className="linkbox-container" id="home-linkbox-container">
                    <Link to="/portfolio">
                        <Section
                            tag="linkbox-btn"
                            orientation="column"
                            chillins={[
                                {
                                    type: "p",
                                    attrs: undefined,
                                    text: "Portfolio",
                                    child: undefined,
                                },
                                {
                                    type: "a",
                                    attrs: { id: "portfolio-linkbox" },
                                    text: undefined,
                                    child: (
                                        <button
                                            onClick={handleClick}
                                            type="button"
                                        >
                                            <img
                                                className="home-linkbox-img"
                                                id="paper-gif"
                                                src="./paper.gif"
                                                alt="Trash Puppy Paper GIF"
                                            ></img>
                                        </button>
                                    ),
                                },
                            ]}
                        ></Section>
                    </Link>

                    <Link to="/about">
                        <Section
                            tag="linkbox-btn"
                            orientation="column"
                            chillins={[
                                {
                                    type: "p",
                                    attrs: undefined,
                                    text: "About",
                                    child: undefined,
                                },
                                {
                                    type: "a",
                                    attrs: { id: "about-linkbox" },
                                    text: undefined,
                                    child: (
                                        <button
                                            onClick={handleClick}
                                            type="button"
                                        >
                                            <img
                                                className="home-linkbox-img"
                                                id="tp-wag-gif"
                                                src="./tp-wag.gif"
                                                alt="Trash Puppy Happy GIF"
                                            ></img>
                                        </button>
                                    ),
                                },
                            ]}
                        ></Section>
                    </Link>
                    <Link to="/contact">
                        <Section
                            tag="linkbox-btn"
                            orientation="column"
                            chillins={[
                                {
                                    type: "p",
                                    attrs: undefined,
                                    text: "Contact",
                                    child: undefined,
                                },
                                {
                                    type: "a",
                                    attrs: { id: "contact-linkbox" },
                                    text: undefined,
                                    child: (
                                        <button
                                            onClick={handleClick}
                                            type="button"
                                        >
                                            <img
                                                className="home-linkbox-img"
                                                id="star-gif"
                                                src="./star.gif"
                                                alt="Trash Puppy Pant GIF"
                                            ></img>
                                        </button>
                                    ),
                                },
                            ]}
                        ></Section>
                    </Link>
                </div>
            </div>
        </>
    );
}
