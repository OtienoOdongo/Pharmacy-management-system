const http = require('http')





/* Setting up Mongoose */

// Set the port for the server to the environment variable PORT or default to 9000
const PORT = process.env.PORT || 9000;

// Connect to MongoDB using the MONGO_URL from the environment variables
mongoose.connect(process.env.MONGO_URL).then(() => {
    // Once connected to MongoDB, the server starts on the specified port
    app.listen(PORT, () => console.log(`The server is listening to port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} Server failed to connect`))

