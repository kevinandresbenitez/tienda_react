import React from 'react';
import ReactDOMServer, { PipeableStream } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server.js';
import {App} from '../client/app.tsx';

export const renderReactApp = async (req: any, res: any) => {

    const {pipe}:PipeableStream = ReactDOMServer.renderToPipeableStream(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
      ,{
        bootstrapScripts:["/shared.bundle.js","/runtime.bundle.js","/main.bundle.js"],
        onShellReady(){
          res.setHeader("content-type","text/html");
          pipe(res)
        }
      });

}