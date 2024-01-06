import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from './db.js'


import patientsRoutes from './api/patients.js'
import pharmaceuticalsRoutes from './api/pharmaceuticals.js'
import usersRoutes from './api/users.js'
import suppliersRoutes from './api/suppliers.js'

dotenv.config();  
const app = express();  

connectDB(); // starting MongoDB connection server

app.use(express.json());  
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));  
app.use(morgan("common"));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(cors());  


app.use('/patients', patientsRoutes)
app.use('/pharmaceuticals', pharmaceuticalsRoutes)
app.use('/users', usersRoutes)
app.use('/suppliers', suppliersRoutes)







const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});


server.on('error', (error) => {
  console.error(`${error} Server failed to connect`);
});



