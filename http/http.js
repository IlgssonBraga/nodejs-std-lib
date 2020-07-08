const http = require("http");

http
  .createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
      res.write("Hello");
      res.end();
    } else if (url === "/about") {
      res.write(JSON.stringify({ name: "Ilgsson" }));
      res.end();
    }
  })
  .listen(3333, () => console.log("Server running on http://localhost:3333"));
