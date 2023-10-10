import Renderer from "renderer.js";
const file = Bun.file;

// Create and run Bun HTTP server:
const Server = {
  port: 5500,
  host: "0.0.0.0", // <-- change this for production, we're running in a VM...
  getResponse: (URLpath) => {
    switch (URLpath) {
      case "/portfolio": {
        return Server.endpoint.portfolio();
      }
      default: {
        return Server.endpoint.root();
      }
    }
  },

  endpoint: {
    portfolio: () => {
      Renderer.renderPortfolio();
    },
  },
};

const BunBridge = {
  startServer: () => {
    Bun.serve({
      port: Server.port,
      hostname: Server.host,
      fetch(reqst) {
        return Server.GetResponse(reqst.url);
        // console.log("REQUEST: " + reqst.url);
        // return new Response(file(html));
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
