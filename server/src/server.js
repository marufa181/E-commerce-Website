
const app = require('./app'); // Import the app from app.js
const { serverPort } = require('./secret');


app.listen(serverPort, () => { //Create a local server on port 3001
  console.log(`Server is running on http://localhost:${serverPort}`);
});