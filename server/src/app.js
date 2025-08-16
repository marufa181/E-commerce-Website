const express = require('express');
const morgan = require('morgan'); // Importing morgan for logging HTTP requests
const createError = require('http-errors')
const app = express();

app.use(morgan('dev')); // Use morgan middleware to log requests in 'dev' format
app.use(express.json()); // Middleware to parse JSON bodies of incoming requests
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies


/**app.get('/', (req, res) => { //HTTP GET request to the root URL
    // This route will respond with a welcome message
    res.status(200).send({
        message:"Welcome to the server!",
    });

});**/

    
app.get('/test', (req, res) => {
     res.status(200).send({
        message:"get: api is working fine!",
    });

});

app.get('/api/users', (req, res) => {
     res.status(200).send({
        message:"user profile is returned",
    });

});


// Client error handling middleware
app.use((req, res, next) => { // Middleware to handle 404 errors
    next(createError(404, 'Resource not found')); // Pass the error to the next middleware
});

// Server error handling middleware -> all the errors
app.use((err, req, res, next) => { // Middleware to handle 500 errors
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});


module.exports = app; // Export the app for use in other files


