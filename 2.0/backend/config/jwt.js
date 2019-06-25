

const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
var mongoose = require("mongoose");
const passport = require("passport");
const Profile = require("../models/profile-model");
const Session = require("../models/session-model");
const User = require("../models/account-model");
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
console.log(opts.jwtFromRequest + 'sad nfda')



passport.use('jwt-t',
    new JwtStrategy(opts, function (jwt_payload, done) {
        console.log(jwt_payload.sub + '  skdlk')
        Session.findById(jwt_payload.sub, function (err, user) {
            if (err) {
                return done(null, user);
                console.log(err);

            }
            if (user) {




                return done(null, user)

            }


        });
    })
);

// passport.use(new JwtStrategy({
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: 'secret'
// },
//   function (jwt_Payload, cb) {

//     //find the user in db if needed
//     return User.getUserById(parseInt(jwt_payload.sub))
//       .then(user => {
//         return cb(null, user);
//       })
//       .catch(err => {
//         return cb(err);
//       });
//   }
// ));