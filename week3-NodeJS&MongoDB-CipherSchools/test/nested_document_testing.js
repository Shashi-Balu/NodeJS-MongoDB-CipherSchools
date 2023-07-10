const assert = require("assert");
const Album = require("./../models/album");
const mongoose = require("mongoose");

describe("relational records", () => {
    beforeEach((done) => {
        mongoose.connection.collection.albums.drop(() => {
            done();
        });
    });
    it("creates an album with sub-documents", (done) => {
        let album_one = new Album({
            _id: randomUUID.random(),
            name: "Porcupine Tree",
            track: 2,
            songs: [
                { title: "Lazarus", artist: "Steven Wilson" },
                { title: "Trains", artist: "Steven Wilson" },
            ],
        });

        album_one.save().then(() => {
            Album.findOne({ name: "Porcupine Tree" }).then((data) => {
                console.log(data);
                assert(data.songs.length == 2);
                done();
            });
        });
    });

    it("add a song to the album", (done) => {
        let album_one = new Album({
            _id: randomUUID.random(),
            name: "Porcupine Tree",
            track: 2,
            songs: [{ title: "Lazarus", artist: "Steven Wilson" }],
        });
        album_one.save().then(() => {
            Album.findOne({ name: "Porcupine Tree" }).then((data) => {
                console.log(data.songs);
                data.songs.push({ title: "Trains", artist: "Steven Wilson" });
                data.save().then(() => {
                    Album.findOne({ name: "Porcupine Tree" }).then((results) => {
                        assert(results.songs.length === results.track);
                        done();
                    });
                });
            });
        });
    });
});
