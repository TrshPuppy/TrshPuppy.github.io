import { useEffect, useState, useRef } from "preact/hooks";
import Section from "../fragments/section";
import getMarkdownFiles from "./markdown/md-parser";

export default function CurrentWriteup(requestedWriteup) {
  const html = { __html: getMarkdownFiles() };

  return (
    <>
      <div id="markdown-div" dangerouslySetInnerHTML={html}></div>
    </>
  );
}