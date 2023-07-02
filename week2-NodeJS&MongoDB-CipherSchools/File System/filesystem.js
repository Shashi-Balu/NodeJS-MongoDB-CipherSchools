const fs = require("fs");

// const readFile = fs.readFileSync("readMe.txt", "utf-8");
// console.log(readFile);

const readFile = fs.readFileSync("readMe.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});
console.log(readFile);
console.log("Sync read");
