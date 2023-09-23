/* MAIN:
 * Bun Quickstart reference: https://bun.sh/docs/quickstart
 * Shodownjs reference:      https://showdownjs.com/docs/quickstart/
 *
 */

// Create and run Bun HTTP server:
const Server = {
  port: 5500,
  host: "0.0.0.0", // <-- change this for production, we're running in a VM...
};

Bun.serve({
  port: Server.port,
  hostname: Server.host,
  fetch(reqst) {
    return new Response("BUN!");
  },
});
