const jwt = require("jsonwebtoken");

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
    const expiresIn = "2 days";

    const token = jwt.sign({}, "secret", {
        expiresIn: expiresIn,

        subject: userId.toString()
    });

    return token;
}

module.exports = {
    generateAccessToken: generateAccessToken
};
