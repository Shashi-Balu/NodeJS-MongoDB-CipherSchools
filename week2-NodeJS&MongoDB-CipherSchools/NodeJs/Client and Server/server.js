const http = require("http");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.end("Hi");
    console.log(req.url);
    let url = req.url;
    if (url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Home");
    }
    if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("About");
    }
    if (url === "/data") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Data");
    }
    if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Contact");
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running at port 3000");
});
