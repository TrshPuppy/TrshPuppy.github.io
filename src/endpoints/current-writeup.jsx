import { useEffect, useState } from 'preact/hooks';
import mdFilesList from '../data/md.json';
import { Converter } from "showdown";

// export default function CurrentWriteup(props) {
//   console.log(`requested writeup = ${props.writeup}`)

//   const mdPath = props.writeup;
//   // Get of requested markdown file:
//   const [data, setData] = useState(null);

//  useEffect(()=>{
//   fetch(mdPath)
//     .then(res => res.text())
//     .then(mdString => {
//     setData(mdString);
//     })
//   }, [mdPath]);

//   // let html = { __html: "" };
//   if(data === null){
//     return <div>loading...</div>;
   
//   }else {
//     const converter = new Converter();
//     const htmlString = converter.makeHtml(data);
  
//     const html = { __html: htmlString};

//     return (
//       <>
//         <div id="markdown-div" dangerouslySetInnerHTML={html}></div>
//       </>
//     );
//   }

 


// }

// function getMarkdownPath(rqst){
//   // Rqst is just the name prop of the object in MD.json, use that to fetch the path
//   let writeupPath = "";
//   for(let file of mdFilesList) {
//     if(file.name === rqst) {
//       writeupPath = file.path;
//     }
//   }

//   // const writeupPath = () =>{
//   //   for(let file of mdFilesList) {
//   //     if(file.name === rqst) {
//   //       return file.path;
//   //     }
//   //   }
//   // }

// import mdText from `${writeupPath}`;


//   // // Get the markdown file:
//   // const mdText = fetch(writeupPath()).then((res) => 
//   //   res.text());

//   // return mdText;
//   return mdText;
// }