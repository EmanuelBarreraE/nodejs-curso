const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to my first server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("about of");
    return response.end();
  }

  response.write(`
    <h1>Not found</h1>
    <p>This page was not found</p>
    <a href="/">Back</a>
    `);
  response.end();
});
server.listen(3000);

console.log("Server listening in the port 3000");
