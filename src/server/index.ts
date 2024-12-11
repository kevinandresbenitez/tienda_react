import express, {RequestHandler } from "express";
import path from 'path';
import favicon from "serve-favicon";
import { renderReactApp } from "./renderer";
import authRoutes from './routes/authRoutes'

//Definicion de varriables
const app:express.Application = express();
const PORT = process.env.PORT;

// Configurando express
app.use(express.static(path.join(process.cwd(), 'dist/client')));
app.use(favicon(path.join(process.cwd(),'src/server/public/favicon.ico')) as RequestHandler);


// Rutas
app.use('/api/auth', authRoutes);

//Sirviendo la aplicacion react
app.get("/*",async (req:any,res:any)=>{
  await renderReactApp(req, res);     
})

app.listen(PORT,()=>{
    console.log("Servidor iniciado en: " + PORT);
})
