// import Renderer from "./src/renderer.js";
const file = Bun.file;

// Create and run Bun HTTP server:
const Server = {
  port: 5500,
  host: "0.0.0.0", // <-- change this for production, we're running in a VM...
  getResponse: (rURL) => {
    console.log("URL PATH: " + rURL.pathname);
    // const splitPath = rURL.split("/");
    // const fixedPath = splitPath[splitPath.length - 1];
    // console.log(fixedPath);

    switch (rURL.pathname) {
      case "/portfolio": {
        console.log("portfolio requested");
        Server.endpoint.portfolio();
        break;
      }
      case "/about": {
        console.log("about requested");
        return Server.endpoint.about();
        break;
      }
      case "/contact": {
        console.log("contact requested");
        return Server.endpoint.contact();
        break;
      }
      case "/": {
        console.log("home requested");
        return Server.endpoint.root();
        break;
      }
      default: {
        console.log("default");
        Server.endpoint.root();
        throw new Error("Request for non-existent path");
        // return Server.endpoint.root();
      }
    }
  },

  endpoint: {
    root: () => {
      console.log("root");
    },
    portfolio: () => {
      console.log("portfolio");
    },
    about: () => {
      console.log("about");
    },
    contact: () => {
      console.log("contact");
    },
  },
};

const BunBridge = {
  startServer: () => {
    Bun.serve({
      development: true,
      port: Server.port,
      hostname: Server.host,
      fetch(reqst) {
        const requestedURL = new URL(reqst.url);
        return Server.getResponse(requestedURL);
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
