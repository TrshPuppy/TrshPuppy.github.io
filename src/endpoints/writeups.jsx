import { isJsxElement } from "typescript";
import Section from "../fragments/section";
import getMarkdownFiles from "./markdown/md-parser";

export default function WriteUps() {
  const html = getMarkdownFiles();
  const mdBox = document.createElement("div");
  mdBox.innerHTML = html;

  document.appendChild(mdBox);
  console.log(mdBox);
  console.log(html);

  return (
    <>
      <div className="welcome writeups">
        <h1>Hacking & Cybersec Writeups</h1>
        <h2>Welcome to the dark side!</h2>
        <p>
          This is a collection of all my writeups for various Capture the Flags
          &other boxes I've hacked. Some come from working through Hack the Box.
          Others from more obscure places.
        </p>
        <p>ENJOY!</p>
      </div>
    </>
  );
}

/*
   h1 HACKING WRITEUPS
   h2 Welcome to the dark side
  p- blurb This is a collection on all of my writeups for various Capture the Flags and other
       hacking challenges. Some writeups come from working through Hack the Box, 
      others are a little more *<obscure></obscure>
  p- ENJOY!

*/
