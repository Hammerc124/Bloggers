// DOTENV import
require("dotenv").config();

// SEQUELIZE IMPORT
const Sequelize = require("sequelize");

// ENVIRONMENT VARIABLES FOR CONNECTION
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
      },
    );

// EXPORT SEQUELIZE CONNECTION
module.exports = sequelize;