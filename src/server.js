const express = require('express');
const app = express();

app.get('/', (req, res) => { //HTTP GET request to the root URL
    // This route will respond with a welcome message
    res.status(200).send({
        message:"Welcome to the server!",
    });

});

app.get('/products', (req, res) => {
     res.status(200).send({ //HTTP status 200 indicates success
        message:"Here are your products!", // json response
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