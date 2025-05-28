const http = require("http");
http
  .createServer((req, res) => {
    // write a response
    res.write("hello");
    res.end();
  })
  .listen(5000, () => console.log("running"));
