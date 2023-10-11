// import Renderer from "./src/renderer.js";
const file = Bun.file;

// Create and run Bun HTTP server:
const Server = {
  port: 5500,
  host: "0.0.0.0", // <-- change this for production, we're running in a VM...
  getResponse: (URLpath) => {
    console.log("URL PATH: " + URLpath);
    const splitPath = URLpath.split("/");
    const fixedPath = splitPath[splitPath.length - 1];
    console.log(fixedPath);

    switch (fixedPath) {
      case "portfolio": {
        console.log("portfolio requested");
        // return Server.endpoint.portfolio();
        break;
      }
      case "about": {
        console.log("about requested");
        break;
      }
      case "contact": {
        console.log("contact requested");
        break;
      }
      case "home": {
        console.log("home requested");
        break;
      }
      default: {
        console.log("default");
        // return Server.endpoint.root();
      }
    }
  },

  endpoint: {
    portfolio: () => {
      console.log("portfolio");
    },
  },
};

const BunBridge = {
  startServer: () => {
    Bun.serve({
      port: Server.port,
      hostname: Server.host,
      fetch(reqst) {
        return Server.getResponse(reqst.url);
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
