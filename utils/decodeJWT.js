const jwt = require('jsonwebtoken');
require('dotenv').config();

const decodeJWT = (authorizationToken) => {
    const jwtToken = authorizationToken.split(" ")[1];

    const loggedInUser = jwt.verify(jwtToken, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return null;
        }
        else {
            const id = payload.userId;
            return id;
        }
    });

    return loggedInUser;
};

module.exports = decodeJWT;