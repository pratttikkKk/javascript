const fs = require('fs');

console.log("Start");

fs.readFile('file.txt', (err, data) => {
    console.log("File Read Completed");
});

console.log("End");