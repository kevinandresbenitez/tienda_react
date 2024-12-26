import express, {RequestHandler } from "express";
import path from 'path';
import favicon from "serve-favicon";
import { renderReactApp } from "./renderer";
import authRoutes from './routes/authRoutes'
import productsRoutes from './routes/productRoutes'
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";
import { initializeDbConnection } from "./config/db/config";

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


initializeDbConnection().then(()=>{
  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/products', productsRoutes);

  // Serving the React app
  app.get("/*",async (req:any,res:any)=>{
    await renderReactApp(req, res);     
  })


}).catch(()=>{
  console.log("DB Error conection")
})


app.listen(PORT,()=>{
    console.log("Server started on: " + PORT);
})
