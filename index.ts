const server = Bun.serve({
  port: process.env.PORT,
  fetch(request) {
    return new Response("Welcome!");
  },
});

console.log(`Listening on localhost:${server.port}`);
