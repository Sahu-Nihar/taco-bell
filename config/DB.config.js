module.exports = {
    HOST_LOCAL: "localhost",
    USER_LOCAL: "root",
    PASSWORD_LOCAL: "Password_123_!",
    DB_LOCAL: "tacobell",

    HOST_STAGE: "18.225.10.147",
    USER_STAGE: "root",
    PASSWORD_STAGE: "password",
    DB_STAGE: "tacobell",

    dialect: "mysql",
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}