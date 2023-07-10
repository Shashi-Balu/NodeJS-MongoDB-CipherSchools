const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongListSchema = new Schema({
    artist: String,
    title: String,
});

const AlbumSchema = new Schema({
    name: String,
    track: Number,
    songs: [SongListSchema],
});

const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;
