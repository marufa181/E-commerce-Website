const createError = require('http-errors');
const users = require('../models/userModel'); // Importing the user model

const getUsers = (req, res, next) => {
    try {
        res.status(200).json({
            message: "User profiles are returned",
            users: users,
        });
    } catch (error) {
        next(error)
   
    }

};

module.exports = {
    getUsers
};
