const config = require('./config');
const express = require("express");
const bp = require("body-parser");
const app = express();

const passport = require("passport");
require("./config/jwt");
app.use(passport.initialize());
const appRoutes = require("./routes/app-routes.js");

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});
const mangoose = require("mongoose");
mangoose.connect("mongodb://localhost/railway");

app.use("/", appRoutes);


app.listen(config.port, err => {
    if (err) {
        console.log("app errored");
        return false;
    }
    console.log(` -> app in ${config.port}`);
});
