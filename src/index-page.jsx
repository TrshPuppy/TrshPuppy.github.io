//import { Page } from "@nakedjsx/core/page";
import { jsx } from "preact/jsx-runtime";

// export default function renderRoot(){
//     return <div>
//         <p>TIDDIES ROOT</p>
//         </div>;

// }

// const renderRoot = () => jsx(<div>{"TIDDIES"}</div>)
const renderRoot = () => jsx("Div",{ color: "red" }, "Home")

export default renderRoot;