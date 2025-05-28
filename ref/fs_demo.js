const fs = require("fs");
const path = require("path");
// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if (err) throw err;
//     console.log('done')
// })
// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello', function (err) {
//     if (err) throw err;
//     console.log('file writtin')
// })
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'world', function (err) {
//     if (err) throw err;
//     console.log('file writtin')
// })
// read file

// rename
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloM.txt"),
  function (err) {
    if (err) throw err;
    console.log("file renamed");
  }
);
