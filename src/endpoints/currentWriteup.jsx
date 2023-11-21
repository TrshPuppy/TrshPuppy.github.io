import { useEffect, useState } from "preact/hooks";
import mdFilesList from "../data/md.json";
import { Converter } from "showdown";
import { Link } from "@reach/router";

export default function CurrentWriteUp(props) {
    const routerPath = props.path;
    let mdPath = "";
    let mdName = "";

    // Get the path to the markdown file from the prop
    switch (routerPath) {
        case "portfolio/writeups/academy":
            mdFilesList.map((x) => {
                if (x.name === "Academy Walkthrough") {
                    mdPath = x.path;
                    mdName = x.to_link;
                }
            });

            break;
        case "portfolio/writeups/HTB-vaccine":
            mdFilesList.map((x) => {
                if (x.name === "HTB Vaccine") {
                    mdPath = x.path;
                    mdName = x.to_link;
                }
            });

            break;
        case "portfolio/writeups/binary-exploitation":
            mdFilesList.map((x) => {
                if (x.name === "Binary Exploitation Pt 1") {
                    mdPath = x.path;
                    mdName = x.to_link;
                }
            });

            break;
        case "portfolio/writeups/classic-buffer-overflow":
            mdFilesList.map((x) => {
                if (x.name === "Binary Exploitation Pt 2") {
                    mdPath = x.path;
                    mdName = x.to_link;
                }
            });

            break;
    }

    // Get of requested markdown file:
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(mdPath)
            .then((res) => res.text())
            .then((mdString) => {
                setData(mdString);
            });
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    } else {
        const converter = new Converter();
        converter.setOption("openLinksInNewWindow", true);
        const htmlString = converter.makeHtml(data);
        const html = { __html: htmlString };

        return (
            <>
                <div className="section-row" id="port-nav-container">
                    <p> /home/trshpuppy</p>
                    <Link to="/portfolio">
                        <p>/portfolio</p>
                    </Link>
                    <Link to="/portfolio/writeups">
                        <p>/writeups</p>
                    </Link>
                    <p>/{mdName}</p>
                    <Link to="/portfolio/writeups">
                        <button>Back</button>
                    </Link>
                </div>
                <div className="markdown-parent-container section-column">
                    <div id="markdown-div" dangerouslySetInnerHTML={html}></div>
                </div>
            </>
        );
    }
}
