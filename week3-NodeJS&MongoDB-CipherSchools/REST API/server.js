const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const url = "mongodb+srv://users:user1@cluster0.pkn90th.mongodb.net/";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to database");
});

app.use(bodyParser.json());
const app = express();
app.use(cors());

app.use("/", routes);

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

app.listen(3000, () => {
    console.log("Listening to the port 3000");
});
