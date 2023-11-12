import mdFilesList from '../data/md.json';
import { Converter } from "showdown";

export default function CurrentWriteup(requestedWriteup) {
  // Get of requested markdown file:
  const mdString = getMarkdownFile(requestedWriteup);

  const converter = new Converter();
  const htmlString = converter.makeHtml(mdString);

  const html = { __html: htmlString};

  return (
    <>
      <div id="markdown-div" dangerouslySetInnerHTML={html}></div>
    </>
  );
}

function getMarkdownFile(rqst){
  // Rqst is just the name prop of the object in MD.json, use that to fetch the path
  const writeupPath = () =>{
    for(let file of mdFilesList) {
      if(file.name === rqst) {
        return file.path;
      }
    }
  }

  // Get the markdown file:
  const mdText = fetch(writeupPath()).then((res) => 
    res.text());

  return mdText;
}