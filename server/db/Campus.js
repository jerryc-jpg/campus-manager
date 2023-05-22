const Sequelize = require('sequelize');
const conn = require('./conn');
const validator = require('validator');

const Campus = conn.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://blog.hubspot.com/hs-fs/hubfs/oregon-state-university-logo.png?width=373&name=oregon-state-university-logo.png",
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: "This is a campus."
    }
});

module.exports = Campus;
