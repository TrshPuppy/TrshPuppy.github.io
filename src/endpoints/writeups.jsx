import { useEffect, useState, useRef } from "preact/hooks";
import Section from "../fragments/section";
import getMarkdownFiles from "./markdown/md-parser";

export default function WriteUps() {
  const html = { __html: getMarkdownFiles() };
  // const aTags


  return (
    <>
      <div className="markdown-div" dangerouslySetInnerHTML={html}></div>
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
