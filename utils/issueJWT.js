const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const issueJWT = (userId) => {
    const expiresIn = '1d';

    const payload = {
        userId: userId,
        time: Date.now()
    };

    const options = { expiresIn: expiresIn };

    const signedToken = jsonwebtoken.sign(payload, process.env.JWT_SECRET, options);

    return {
        token: `Bearer ${signedToken}`,
        expires: expiresIn
    };
};

module.exports = issueJWT;