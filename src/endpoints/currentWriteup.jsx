import { useEffect, useState } from 'preact/hooks';
import mdFilesList from '../data/md.json';
import { Converter } from "showdown";

// JSON.parse(mdPath)


export default function CurrentWriteUp(props) {
    const routerPath = props.path;
    let mdPath = "";
    
    
    // Get the path to the markdown file from the prop
    switch(routerPath) {
        case 'portfolio/writeups/academy':
            mdFilesList.map((x) => {
                if(x.name === "Academy Walkthrough") {
                    mdPath = x.path;
                };
            })
            console.log(`mdPath = ${mdPath}`)
            break;
        case 'portfolio/writeups/HTB-vaccine':
            mdFilesList.map((x) => {
                if(x.name === "HTB Vaccine") {
                    mdPath = x.path;
                };
            })
            console.log(`mdPath = ${mdPath}`)
            break;
    }



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

        <div id="markdown-div" dangerouslySetInnerHTML={html}></div>

    );
  }
}


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