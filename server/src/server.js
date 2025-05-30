const express = require('express');
const morgan = require('morgan'); // Importing morgan for logging HTTP requests
const app = express();

app.use(morgan('dev')); // Use morgan middleware to log requests in 'dev' format

app.get('/', (req, res) => { //HTTP GET request to the root URL
    // This route will respond with a welcome message
    res.status(200).send({
        message:"Welcome to the server!",
    });

});

app.get('/products', (req, res) => {
     res.status(200).send({ //HTTP status 200 indicates success
        message:"products", // json response
    });

});
    
app.get('/test', (req, res) => {
     res.status(200).send({
        message:"api is working fine!",
    });

});

app.listen(3001, () => { //Create a local server on port 3001
  console.log('Server is running on http://localhost:3001');
});