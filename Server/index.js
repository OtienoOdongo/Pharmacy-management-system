import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/*Importing custom route handlers*/
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";


/* Setting up configurations */

// Loads environment variables from a .env file into process.env
dotenv.config();  

// Creates an Express application
const app = express();  

// Middleware to parse JSON in the request body
app.use(express.json());  

// Sets various security-related HTTP headers
app.use(helmet());  

// Configures Cross-Origin Resource Policy
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));  

// Logs HTTP requests to the console
app.use(morgan("common"));  

// Middleware to parse JSON in the request body
app.use(bodyParser.json());  

// Middleware to parse URL-encoded data in the request body
app.use(bodyParser.urlencoded({ extended: false }));  

// Enables Cross-Origin Resource Sharing
app.use(cors());  

/* Setting up Routes */

// Associates "/client" route with clientRoutes
app.use("/client", clientRoutes);  

// Associates "/general" route with generalRoutes
app.use("/general", generalRoutes);  

// Associates "/management" route with managementRoutes
app.use("/management", managementRoutes);  

// Associates "/sales" route with salesRoutes
app.use("/sales", salesRoutes); 


/* Setting up Mongoose */

// Set the port for the server to the environment variable PORT or default to 9000
const PORT = process.env.PORT || 9000;

// Connect to MongoDB using the MONGO_URL from the environment variables
mongoose.connect(process.env.MONGO_URL).then(() => {
    // Once connected to MongoDB, the server starts on the specified port
    app.listen(PORT, () => console.log(`The server is listening to port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} Server failed to connect`))

