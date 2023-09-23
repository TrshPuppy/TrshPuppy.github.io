/* MAIN:
 * Bun Quickstart reference: https://bun.sh/docs/quickstart
 * Shodownjs reference:      https://showdownjs.com/docs/quickstart/
 *
 */
import BunBridge from "./bun.js";

// PATH HANDLERS:
/* Notes:
 * Paths:
 * - home
 * - about
 * - contact
 * - writeups/ portfolio
 *
 */

// // Create and run Bun HTTP server:
// const Server = {
//   port: 5500,
//   host: "0.0.0.0", // <-- change this for production, we're running in a VM...
// };

// Bun.serve({
//   port: Server.port,
//   hostname: Server.host,
//   fetch(reqst) {
//     return new Response(Bun.file("index.html"));
//   },
// });

BunBridge.startServer();
