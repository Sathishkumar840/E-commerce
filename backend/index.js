const express =require('express')
// import express from 'express';

const cors =require('cors')
// import cors from 'cors';


const cookieParser = require('cookie-parser')
// import cookieParser from 'cookie-parser';



require('dotenv').config()
// import dotenv from 'dotenv';
// dotenv.config();



const connectDB = require('./config/db')
// import connectDB from './config/db.js';


const router=require('./routes/index')

// configure setup

const path = require("path");
// import { fileURLToPath } from "url"

// const __filename = fileURLToPath (import.meta.url)
// const __dirname =path.dirname(__filename)

// console.log(__dirname);

const app=express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

app.use(express.static(path.join(__dirname, "./dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./dist/index.html"));
  });

const PORT = 8080||process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})