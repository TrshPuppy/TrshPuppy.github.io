import { useEffect, useState, useRef } from "preact/hooks";
import mdFilesList from '../data/md.json';
// import CurrentWriteup from "./current-writeup";
import { Converter } from "showdown";
import { Link } from "@reach/router";
import { render } from "preact";
import CurrentWriteUp from "./currentWriteup";
import { Router } from "@reach/router";


export default function WriteUps(){
  console.log("WWRITEUPO RE RENDER")
  const [currentWriteup, setWriteup] = useState('none');

  const handleCardClick = (path) => {
    setWriteup(path);
  }

  // Build array of preview card components:
  const previewCards = [];
  for(let file of mdFilesList) {
    // const previewComp = <PreviewCard fileObj={file} />
    previewCards.push(<PreviewCard fileObj={file} handleCardClick={handleCardClick}/>);
  }

  let contentComponent = (<div id="writeup-previews" className="section-row">
  {previewCards}
</div>)

  useEffect(() => {
    if(currentWriteup === 'none') {
      contentComponent = (
        <div id="writeup-previews" className="section-row">
          {previewCards}
        </div>
      )
    } else {
      contentComponent = (<CurrentWriteUp writeupPath={currentWriteup} />)
    }
  }, [currentWriteup])

  console.log(`current writeup = ${currentWriteup}`)


  return (
    <>
      <div className="section-row" id="port-nav-container">
      <p> /home/trshpuppy</p>
      <Link to='/portfolio'>
        <p>/portfolio</p>
      </Link>
      <p>/writeups</p>
      <Link to="/portfolio">
        <button>Back</button>
      </Link>
      </div>
      <div>{contentComponent}</div>     
        
    </>
  )
}

function PreviewCard({fileObj, handleCardClick} ) {
  // Fix description length & title:
  if(fileObj.description.length > 40) {
    fileObj.description = fileObj.description.slice(0, 40) + "...";
  }

  if(fileObj.name.length > 40) {
    fileObj.name = fileObj.name.slice(0, 40) + "...";
  }

  return (
    <Link to={fileObj.to_link}>
      <div className="preview-card section-row" onClick={handleCardClick(fileObj.path)}>
        <img className="wu-preview-img" src={fileObj.img_path} alt={fileObj.name} />
        <div  className="wu-preview-text section-column">
          <h2>{fileObj.name}</h2>
          <p>{fileObj.description}</p>
        </div>
      </div>
    </Link>
  );
}

// function CurrentWriteup(props) {
//   console.log(`requested writeup = ${props.writeup}`)
//   const fileObj = props.writeup;
//   const mdPath = fileObj.path;
//   const link = fileObj.linkto;

//   // Get of requested markdown file:
//   const [data, setData] = useState(null);
  

//   useEffect(()=>{
//     fetch(mdPath)
//       .then(res => res.text())
//       .then(mdString => {
//       setData(mdString);
//     })
//   }, []);

//   // let html = { __html: "" };
//   if(data === null){
//     return <div>loading...</div>;
   
//   }else {
//     const converter = new Converter();
//     const htmlString = converter.makeHtml(data);
  
//     const html = { __html: htmlString};

//     return (
//       <Router>
//         <div path={link} id="markdown-div" dangerouslySetInnerHTML={html}></div>
//       </Router>
//     );
//   }

 


// }


/*
   h1 HACKING WRITEUPS
   h2 Welcome to the dark side
  p- blurb This is a collection on all of my writeups for various Capture the Flags and other
       hacking challenges. Some writeups come from working through Hack the Box, 
      others are a little more *<obscure></obscure>
  p- ENJOY!

*/
