const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url === "/" || url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let readStream = fs.createReadStream(__dirname + "/index.html");
        readStream.pipe(res);
    } else if (url === "/data") {
        res.writeHead(200, { "Content-Type": "application/json" });
        let data = [
            { myName: "My name", desc: "Yes, it is my name" },
            { yourName: "Your name", desc: "Wow, it is your name" },
        ];
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        let readStream = fs.createReadStream(__dirname + "/notfound.html");
        readStream.pipe(res);
    }
});
server.listen(3000, () => {
    console.log("Server is running");
});
