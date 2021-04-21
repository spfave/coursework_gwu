// Modules
const http = require("http");
const fs = require("fs");

const PORT = 8080;

// Function
function sendHTML(filePath, res) {
  return fs.readFile(`${__dirname}${filePath}`, (err, data) => {
    if (err) throw err;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Function Handlers
const handleRequest = (req, res) => {
  const path = req.url;
  console.log(path);

  switch (path) {
    case "/html/foods":
    case "/html/movies":
    case "/html/frameworks":
      return sendHTML(`${path}.html`, res);

    default:
      // const filePath = "\\index.html";
      // fs.readFile(`${__dirname}${filePath}`, (err, data) => {
      //   if (err) throw err;
      //   res.writeHead(200, { "Content-Type": "text/html" });
      //   res.end(data);
      // });
      return sendHTML(`/index.html`, res);
  }
};

// Server
const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
