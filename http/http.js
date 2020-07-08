const http = require("http");

http
  .createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
      res.write("Hello");
      res.end();
    } else if (url === "/about") {
      const { method, url, headers } = req;
      const userAgent = headers["user-agent"]; // Postman
      console.log(userAgent);

      res.writeHead(201, {
        "Content-Type": "application/json",
        "X-Powered-By": "Ilgsson",
      });

      res.write(JSON.stringify({ name: "Ilgsson" }));
      res.end();
    }
  })
  .listen(3333, () => console.log("Server running on http://localhost:3333"));
