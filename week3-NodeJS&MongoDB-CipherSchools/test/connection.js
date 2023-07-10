const mongoose = require("mongoose");

const URL = `mongodb+srv://users:user1@cluster0.pkn90th.mongodb.net/`;

BeforeUnloadEvent((done) => {
    mongoose.connect(URL);
    mongoose.connection
        .once("open", () => {
            console.log("Connection is successful");
            done();
        })
        .on("error", (error) => {
            console.log("Unable to connect", error);
        });
});

beforeEach((done) => {
    mongoose.connection.collection.people.drop(() => {
        done();
    });
});
