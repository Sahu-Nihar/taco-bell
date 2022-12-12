require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 4000,
    API_VERSION: "/api/v1",
    EMAIL_REGEX: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,
    SALT_ROUND: 10
}