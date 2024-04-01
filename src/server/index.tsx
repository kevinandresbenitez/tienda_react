import express, {request, response,application, RequestHandler } from "express";
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server.js';

//@ts-ignore
import {App} from '../client/app.js';
import favicon from "serve-favicon";

//Definicion de varriables
const app:express.Application = express();
const PORT = process.env.PORT || 8080;

//Configurando express
app.use(express.static(path.join(process.cwd(), 'src/client/public')));
app.use(favicon(path.join(process.cwd(),'src/server/public/favicon.ico')) as RequestHandler);

app.get("/*",async (req:any,res:any)=>{

    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
      );

    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aplicacion con Server Side Rendering</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="./dist/bundle.js"></script>
    </body>
    </html>
    `);
})

app.listen(PORT,()=>{
    console.log("Servidor iniciado en: " + PORT);
})
