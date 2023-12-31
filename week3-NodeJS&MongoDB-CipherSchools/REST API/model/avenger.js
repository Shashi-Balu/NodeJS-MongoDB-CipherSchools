const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AvengerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    avengerName: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
});

const Avenger = mongoose.model("Avenger", AvengerSchema);
module.exports = Avenger;
