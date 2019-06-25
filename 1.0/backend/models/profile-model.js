const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const profileSchema = new Schema({
    email: String,
    name: String,
    age: String,
    address: String,
    trainSearch: [{
        from: String,
        To: String,
        date: String
    }]

});
const profile = mongoose.model("profile", profileSchema);
module.exports = profile;
