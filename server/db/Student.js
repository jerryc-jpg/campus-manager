const Sequelize = require('sequelize');
const conn = require('./conn');

const Student = conn.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        validate: {
            isUrl: true
        }
    },
    gpa: {
        type: Sequelize.DECIMAL,
    }
});

module.exports = Student;
