
// import sequelize constructor
const Sequelize = require('sequelize');

// import .env
require('dotenv').config();

// make db connection with MySQL into
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;