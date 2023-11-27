export default function Contact() {
    return (
        <>
            <div className="content-stack-top" id="contact-stack-top">
                <div className="section-row" id="contact-pic-section">
                    <div id="contact-blurb">
                        <h1> Want to Chat? </h1>
                        <h2>
                            Have you been browsing the trash heap and like what
                            you see?
                        </h2>
                        <p>
                            Or maybe you have some questions or even
                            suggestions? If so, I'd love to get in touch with
                            you!
                        </p>
                        <p>
                            Else, I encourage you to keep looking around. Spend
                            as much time as you like.
                        </p>
                        <p>
                            I'll be improving this page soon. For now, reach out
                            to me on any of these platforms:
                        </p>
                        <ul id="contact-link-list">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://github.com/TrshPuppy"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://x.com/TrshPuppy"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://twitch.tv/trshpuppy"
                                >
                                    Twitch
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://youtube.com/@trshpuppy"
                                >
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="./about1.jpg"
                        alt="picture of TP"
                        id="contact-pic"
                    ></img>
                </div>
            </div>
        </>
    );
}
