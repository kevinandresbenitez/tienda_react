import express, {RequestHandler } from "express";
import path from 'path';
import favicon from "serve-favicon";
import { renderReactApp } from "./renderer";
import authRoutes from './routes/authRoutes'
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";

// import.env file
dotenv.config();

// Defining variables
const app:express.Application = express();
const PORT = process.env.PORT || 8080;

// Configuring express
app.use(express.static(path.join(process.cwd(), 'dist/client')));
app.use(favicon(path.join(process.cwd(),'src/server/public/favicon.ico')) as RequestHandler);
app.use(express.json());
// Configuring cookie parser
app.use(cookieParser()); 

// Routes
app.use('/api/auth', authRoutes);

// Serving the React app
app.get("/*",async (req:any,res:any)=>{
  await renderReactApp(req, res);     
})

app.listen(PORT,()=>{
    console.log("Server started on: " + PORT);
})
