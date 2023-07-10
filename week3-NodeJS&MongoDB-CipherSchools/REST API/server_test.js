const express = require("express");

const server = express();

server.get("/", (req, res) => {
    console.log("A request was made for this endpoint");
    res.send({ message: "Hi" });
});

server.listen(3000, () => {
    console.log("Listening to the port 3000");
});
