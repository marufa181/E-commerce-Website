require('dotenv').config(); // Load environment variables from .env file
const serverPort = process.env.SERVER_PORT || 3002; // Set the port from environment variable or default to 3002

module.exports = {serverPort};
