const express = require("express");
const routes = express.Router();
const Avenger = require("../model/avenger");

routes.get("/avengers", (req, res, next) => {
    Avenger.find({})
        .then((data) => {
            res.send(data);
        })
        .catch(next);
});

routes.post("/api/avengers", (req, res, next) => {
    console.log(req.body);
    // let newAvenger = new Avenger(req.body);
    // newAvenger.save().then((data) => {
    //     res.send(data);
    // });
    // res.send({ message: "Check your backend console" });

    Avenger.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch(next);
});

routes.put("/avengers/:id", (req, res, next) => {
    console.log(req.body, req.params.id);
    Avenger.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((data) => {
            res.send(data);
        })
        .catch(next);
});

routes.delete("/avengers/:id", (req, res, next) => {
    console.log(req.body, req.params.id);
    Avenger.findByIdAndDelete({ _id: req.params.id }, req.body, { new: true })
        .then((data) => {
            res.send(`Data deleted: ${data}`);
        })
        .catch(next);
});

module.exports = routes;
