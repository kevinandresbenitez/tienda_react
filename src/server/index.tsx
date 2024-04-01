import express, {request, response,application } from "express";
import path from 'path'
const app:express.Application = express();
const PORT = process.env.PORT || 8080;
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';

import React from 'react';
//@ts-ignore
import {App} from '../client/app.js';

//Configurando express
app.use(express.static(path.join(__dirname, '../../client/public/dist')));


app.get("/*",(req:any,res:any)=>{
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
      <script src="./bundle.js"></script>
    </body>
    </html>
    `);
})


app.listen(PORT,()=>{
    console.log("Servidor iniciado en: " + PORT);
})
