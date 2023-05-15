const Sequelize = require('sequelize');
const conn = require('./conn');

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
        validate: {
            isUrl: true
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: "This is a campus."
    }
});

module.exports = Campus;
