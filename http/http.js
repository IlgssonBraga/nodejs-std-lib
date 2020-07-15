const http = require("http");

// Instanciar uma classe Server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello");
    res.end();
  }
});

// Como server é uma classe, temos alguns eventos que podem
// ser ouvidos

server.addListener("connection", () => {
  console.log("New connection");
});

server.listen(3333);

console.log("Server running on PORT 3333");
