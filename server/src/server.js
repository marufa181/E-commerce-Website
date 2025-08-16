const app = require('./app'); // Import the app from app.js

app.listen(3001, () => { //Create a local server on port 3001
  console.log('Server is running on http://localhost:3001');
});