export default function Nav(props){
    return (
        <nav>
            <div
            class="logo">
                <a 
                href="index">
                    <img
                    id="logo-pic"
                    src="./src/assets/preact.svg"
                    alt="TrshPuppy logo"
                    style="image-rendering: pixelated">
                    </img>
                </a> 
        </div>
        <div
        class="menu">
            <a
            href="about">
                <button
                type="button">
                    { "About" }
                </button>
            </a>
            <a
            href="contact">
                <button
                type="button">
                   { "Contact" }
                </button>
            </a>
            <a
            href="portfolio">
                <button
                type="button">
                   { "Portfolio" }
                </button>
            </a>
        </div>
    </nav>
    )

}