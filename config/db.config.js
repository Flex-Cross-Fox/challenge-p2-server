module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "PStr!n9/P",
    DB: "Netflix-test",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};