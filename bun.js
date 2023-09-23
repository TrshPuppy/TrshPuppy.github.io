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
        return new Response(Bun.file("index.html"));
      },
    });
  },
};

export default BunBridge;
