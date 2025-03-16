import dbConnect from "./Config/db.js";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//confugure env
dotenv.config();

//connect to database
dbConnect();

//initialize express
const app = express();

//middleware
app.use(express.json());

//routes
app.get("/",(req,res)=>{
    res.send(`<h1>API is running</h1>`)
});

const PORT = process.env.PORT || 8080;
console.log(PORT)

//listen to port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})