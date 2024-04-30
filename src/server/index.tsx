import express, {request, response,application, RequestHandler } from "express";
import path from 'path';
import React from 'react';
import ReactDOMServer, { PipeableStream } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server.js';


import {App} from '../client/app.tsx';
import favicon from "serve-favicon";

//Definicion de varriables
const app:express.Application = express();
const PORT = process.env.PORT || 8080;

//Configurando express
app.use(express.static(path.join(process.cwd(), 'src/client/public')));
app.use(favicon(path.join(process.cwd(),'src/server/public/favicon.ico')) as RequestHandler);

app.get("/*",async (req:any,res:any)=>{

    const {pipe}:PipeableStream = ReactDOMServer.renderToPipeableStream(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
      ,{
        bootstrapScripts:["./dist/shared.bundle.js","./dist/runtime.bundle.js","./dist/main.bundle.js"],
        onShellReady(){
          res.setHeader("content-type","text/html");
          pipe(res)
        }
      });

      
    
})

app.listen(PORT,()=>{
    console.log("Servidor iniciado en: " + PORT);
})
