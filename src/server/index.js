import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;
import {App} from '../client/app.js';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

app.get("/*",(req,res)=>{
    const html = ReactDOMServer.renderToString(<App />);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aplicacion con Server Side Rendering</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
    `);
})

app.listen(PORT,()=>{
    console.log("Servidor iniciado en: " + PORT);
})
