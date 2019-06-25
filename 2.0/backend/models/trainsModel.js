const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const trainSchema = new Schema({
    pid: String,
    trainSearch: [{
        from: String,
        to: String,
        date: String
    }]

});
const train = mongoose.model("train", trainSchema);
module.exports = train;
