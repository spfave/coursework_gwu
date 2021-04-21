// Modules
const http = require("http");
const fs = require("fs");
const PORT = 8080;

// Functions
function renderThankYouPage(req, res) {
  let postData = "";
  let myHTML =
    "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";

  // When the server receives data
  req.on("data", (data) => {
    postData += data;
    console.log("Data has been posted to the server: \n", postData);

    myHTML = `
    <html>
    <head>
      <title>Hello Noder!</title>
    </head>
    <body>
      <h1>Thanks for the data: </h1>
      <code>${postData}</code>
    </body>
  </html>
    `;
  });

  // When the request has ended
  req.on("end", () => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(myHTML);
  });
}

function renderWelcomePage(req, res) {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    /**
     * if error: send notice of error back to user
     * else: return html page requested
     */
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(
        "<html><head><title>Oops</title></head><body><h1>Oops, there was a server error</h1></html>"
      );
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// Handler
const handleRequest = (req, res) => {
  const path = req.url;

  switch (path) {
    case "/thanks":
      return renderThankYouPage(req, res);

    default:
      return renderWelcomePage(req, res);
  }
};

// Server
const server = http.createServer(handleRequest);
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
