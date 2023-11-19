import { Link, Router } from "@reach/router";

export default function Portfolio() {
    return (
        <>
            <div className="section-row" id="port-nav-container">
                <p> /home/trshpuppy/portfolio</p>
                <Link to="coding">
                    <button>Coding</button>
                </Link>
                <Link to="writeups">
                    <button>WriteUps</button>
                </Link>
            </div>
            <div className="section-column">
                <h1>Welcome to my Portfolio!</h1>
                <div id="portfolio-stack-2-context" className="section-row">
                    <img
                        id="portfolio-pant-gif"
                        src="./TP-pant.gif"
                        alt="TP Panting GIF"
                    ></img>
                    <div className="section-column">
                        <h2>
                            Here you'll find various writeups and projects I've
                            been working on, all related to cybersecurity and
                            coding!
                        </h2>
                        <p>
                            {" "}
                            If you'd like to see cybersecurity writeups &
                            content, cd into `Writeups.' Else, cd into 'Coding.'
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
