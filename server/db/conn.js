const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:5432/jpfp-final')

module.exports = conn;