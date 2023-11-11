import { useEffect, useState, useRef } from "preact/hooks";
import Section from "../fragments/section";
import getMarkdownFiles from "./markdown/md-parser";
import mdFilesList from '../data/md.json';

export default function WriteUps() {
  console.log(mdFilesList[0]);

  const previewCards = [];

  for(let file of mdFilesList) {
    previewCards.push(<PreviewCard fileObj={file} />);
  }

  return (
    <>
      <div id="writeup-previews" className="section-row">{previewCards}</div>
    </>
  );


}

function PreviewCard({ fileObj }) {
  // Fix description length & title:
  if(fileObj.description.length > 40) {
    fileObj.description = fileObj.description.slice(0, 40) + "...";
  }

  if(fileObj.name.length > 40) {
    fileObj.name = fileObj.name.slice(0, 40) + "...";
  }

  return (
    <div className="preview-card section-row">
      <img className="wu-preview-img" src={fileObj.img_path} alt={fileObj.title} />
      <div className="wu-preview-text section-column">
        <h2>{fileObj.name}</h2>
        <p>{fileObj.description}</p>
      </div>
    
    </div>
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
