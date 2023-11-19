import mdFilesList from "../data/md.json";
import { Link } from "@reach/router";

export default function WriteUps() {
    // Build array of preview card components:
    const previewCards = [];
    for (let file of mdFilesList) {
        previewCards.push(<PreviewCard fileObj={file} />);
    }

    let contentComponent = (
        <div id="writeup-previews" className="section-row">
            {previewCards}
        </div>
    );

    return (
        <>
            <div className="section-row" id="port-nav-container">
                <p> /home/trshpuppy</p>
                <Link to="/portfolio">
                    <p>/portfolio</p>
                </Link>
                <p>/writeups</p>
                <Link to="/portfolio">
                    <button>Back</button>
                </Link>
            </div>
            <div>{contentComponent}</div>
        </>
    );
}

function PreviewCard({ fileObj, handleCardClick }) {
    // Fix description length & title:
    if (fileObj.description.length > 40) {
        fileObj.description = fileObj.description.slice(0, 40) + "...";
    }

    if (fileObj.name.length > 40) {
        fileObj.name = fileObj.name.slice(0, 40) + "...";
    }

    return (
        <Link to={fileObj.to_link}>
            <div className="preview-card section-row">
                <img
                    className="wu-preview-img"
                    src={fileObj.img_path}
                    alt={fileObj.name}
                />
                <div className="wu-preview-text section-column">
                    <h2>{fileObj.name}</h2>
                    <p>{fileObj.description}</p>
                </div>
            </div>
        </Link>
    );
}
