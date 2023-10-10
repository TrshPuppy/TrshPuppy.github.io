/* MAIN:
 * Bun Quickstart reference: https://bun.sh/docs/quickstart
 * Shodownjs reference:      https://showdownjs.com/docs/quickstart/
 *
 */
import BunBridge from "./bun.js";
import "./assets/stylesheet.css";

// const stylesheet = "./assets/stylesheet.css";

// PATH HANDLERS:
/* Notes:
 * Paths:
 * - home
 * - about
 * - contact
 * - writeups/ portfolio
 *
 */

// Bundler:
const entrypoints = ["./app.js"];
const outdir = "./out";
// await Bun.build({
//   entrypoints: entrypoints,
//   outdir: outdir,
//   naming: {
//     asset: "[name].[ext]",
//   },
// });

await BunBridge.bundle(entrypoints, outdir);

// // Create and run Bun HTTP server:
BunBridge.startServer();
