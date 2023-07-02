const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.send("Hello , express");
});

app.listen(3000, () => {
    console.log("Server is listening");
});
