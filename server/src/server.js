const express = require('express');
const morgan = require('morgan'); // Importing morgan for logging HTTP requests
const app = express();

app.use(morgan('dev')); // Use morgan middleware to log requests in 'dev' format
const isLoggedIn =(req, res, next) => { //Middleware function
    const login = true;
    if (login){
    next();
    } else {
        return res.status(401).json({ //HTTP status 401 indicates unauthorized access
            message: "Unauthorized access and login first",
        });
    }
};

app.use(isLoggedIn); // Apply the isLoggedIn middleware to all routes


app.get('/', (req, res) => { //HTTP GET request to the root URL
    // This route will respond with a welcome message
    res.status(200).send({
        message:"Welcome to the server!",
    });

});

app.get('/api/products',(req, res) => {
     res.status(200).send({ //HTTP status 200 indicates success
        message:"products is returned", // json response
    });

});
    




app.get('/test', (req, res) => {
     res.status(200).send({
        message:"get: api is working fine!",
    });

});

app.post('/test', (req, res) => {
     res.status(200).send({
        message:"post: api is working fine!",
    });

});

app.put('/test', (req, res) => {
     res.status(200).send({
        message:"put: api is working fine!",
    });

});

app.delete('/test', (req, res) => {
     res.status(200).send({
        message:"delete: api is working fine!",
    });

});




app.listen(3001, () => { //Create a local server on port 3001
  console.log('Server is running on http://localhost:3001');
});