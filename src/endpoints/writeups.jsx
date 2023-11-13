import { useEffect, useState, useRef } from "preact/hooks";
import mdFilesList from '../data/md.json';
// import CurrentWriteup from "./current-writeup";
import { Converter } from "showdown";

export default function WriteUps() {
   // Set state related to the user's content choice:
  const [content, setContent] = useState('previews');
  console.log(`content = ${content}`)

  // Build array of preview card components:
  const previewCards = [];
  for(let file of mdFilesList) {
    console.log('file in preview card for loop = ${file}'+file.description)
    previewCards.push(<PreviewCard fileObj={file} setContent={setContent} />);
  }

  // useEffect(() => {

  // },[])

  if(content === 'previews') {
    console.log("made it in here bitch")
    return <div id="writeup-previews" className="section-row">{previewCards}</div>
  } else {
    console.log(`content else = ${content}`)
    // return <div> fuck my life</div>
    return <CurrentWriteup writeup={content} />
  }
}

function PreviewCard({fileObj, setContent} ) {
  console.log(`file description in previuew card func = ${fileObj.description}`)
  // Fix description length & title:
  if(fileObj.description.length > 40) {
    fileObj.description = fileObj.description.slice(0, 40) + "...";
  }

  if(fileObj.name.length > 40) {
    fileObj.name = fileObj.name.slice(0, 40) + "...";
  }

  return (
    <div className="preview-card section-row">
      <img className="wu-preview-img" src={fileObj.img_path} alt={fileObj.name} />
      <div onClick={() => setContent(fileObj.path)} className="wu-preview-text section-column">
        <h2>{fileObj.name}</h2>
        <p>{fileObj.description}</p>
      </div>
    
    </div>
  );
}

function CurrentWriteup(props) {
  console.log(`requested writeup = ${props.writeup}`)

  const mdPath = props.writeup;
  // Get of requested markdown file:
  const [data, setData] = useState(null);

 useEffect(()=>{
  fetch(mdPath)
    .then(res => res.text())
    .then(mdString => {
    setData(mdString);
    })
  }, []);

  // let html = { __html: "" };
  if(data === null){
    return <div>loading...</div>;
   
  }else {
    const converter = new Converter();
    const htmlString = converter.makeHtml(data);
  
    const html = { __html: htmlString};

    return (
      <>
        <div id="markdown-div" dangerouslySetInnerHTML={html}></div>
      </>
    );
  }

 


}






/*
   h1 HACKING WRITEUPS
   h2 Welcome to the dark side
  p- blurb This is a collection on all of my writeups for various Capture the Flags and other
       hacking challenges. Some writeups come from working through Hack the Box, 
      others are a little more *<obscure></obscure>
  p- ENJOY!

*/
