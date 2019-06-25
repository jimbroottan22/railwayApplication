const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const accountSchema = new Schema({
    email: String,
    password: String

});
const account = mongoose.model("account", accountSchema);
module.exports = account;
