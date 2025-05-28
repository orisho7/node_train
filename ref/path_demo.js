const path = require('path');
//Basename
console.log(__filename)

// dir
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename).base);

//concatenenate paths
console.log(path.join(__dirname,'test','hello.html'));