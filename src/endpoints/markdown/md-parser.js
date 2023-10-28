import { Converter } from "showdown";

const showdown = require("showdown");

export default function convertThis(md) {
  // 'md' should be a string of markdown text
  const converter = new showdown.Converter();
  const html = converter.makeHtml(md);
}
// export default function parseThis(md) {
//   // Create a trie of tokens, leaf nodes are functions
//   const tokenTrie = {};

//   // Set the current node equal to the root of the trie
//   let currentNode = tokenTrie;

//   // Go through the node, comparing current stream character to tokes in trie:
//   for (let pointer = 0; pointer <= md.length - 1; pointer++) {
//     // Set the current Node to the current character in the markdown stream:
//     currentNode = currentNode[md[pointer]];

//     // If the node is a function, we're found a token, execute the function:
//     if (typeof currentNode === "function") {
//       console.log(`Current Function name = ${currentNode.name}`);

//       // If the function advances the pointer of the markdown stream, it will return the new pointer value
//       //    else, the current pointer value stays the same
//       const returnedPointerIndex = currentNode(pointer);
//       pointer = returnedPointerIndex === undefined ? pointer : returnedPointerIndex;
//     }
//   }
// }
// /*
//     tokens:
//     "#"
//         headers: all the way to  ######
//         needs to : get header type/ length
//         get the text after it?

//         "\n"
// */
