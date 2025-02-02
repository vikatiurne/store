const { Sequelize } = require("sequelize");
const { pg } = require("pg");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    dialectOptions: {
      // для прод
      // "ssl": {
      //   "require": true,
      //   "rejectUnauthorized": false
      // }
    },
    dialectModule: pg,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
      }
);
