/* MAIN:
 * Bun Quickstart reference: https://bun.sh/docs/quickstart
 * Shodownjs reference:      https://showdownjs.com/docs/quickstart/
 *
 */
import BunBridge from "./src/bun.js";

// Bundler:
const entrypoints = ["./app.js"];
const outdir = "out";
await BunBridge.bundle(entrypoints, outdir);

// Create and run Bun HTTP server:
BunBridge.startServer();
