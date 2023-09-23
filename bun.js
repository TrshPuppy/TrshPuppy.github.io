import html from "./out/index.html";
// import { file } from "bun";
const file = Bun.file;

// Create and run Bun HTTP server:
const Server = {
  port: 5500,
  host: "0.0.0.0", // <-- change this for production, we're running in a VM...
};

const BunBridge = {
  startServer: () => {
    Bun.serve({
      port: Server.port,
      hostname: Server.host,
      fetch(reqst) {
        return new Response(file(html));
      },
    });
  },
  bundle: async (ep, od) => {
    await Bun.build({
      entrypoints: ep,
      outdir: od,
      naming: {
        asset: "[name].[ext]",
      },
    });
  },
};

export default BunBridge;
