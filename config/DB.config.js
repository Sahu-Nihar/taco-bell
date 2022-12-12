module.exports = {
    HOST_LOCAL: "localhost",
    USER_LOCAL: "root",
    PASSWORD_LOCAL: "Password_123_!",
    DB_LOCAL: "tacobell",

    HOST_STAGE: "52.54.44.196",
    USER_STAGE: "trox",
    PASSWORD_STAGE: "Password_123_!",
    DB_STAGE: "tacobell",

    dialect: "mysql",
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
