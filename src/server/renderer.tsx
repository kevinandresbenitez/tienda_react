import React from 'react';
import ReactDOMServer, { PipeableStream } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server.js';
import {App} from '../client/app.tsx';

import { Product } from '../client/models/product/index.ts';

export const renderReactApp = async (req: any, res: any) => {

  let homeData:Product[] = [];
  let productData:Product | null = null;

  // for / direction
  if(req.url.startsWith('/')){
    try{
      homeData = await Product.getProducts();
    }catch(error){}
  }

  // for /product/:id directions
  if(req.url.startsWith('/product/')){
    const productId = req.url.split('/')[2];
    try{
      if(!/^\d+$/.test(productId)){
        productData = await Product.getProductById(parseInt(productId,10));
      }
    }catch(error){}
  }


    const {pipe}:PipeableStream = ReactDOMServer.renderToPipeableStream(
        <StaticRouter location={req.url}>
            <App homeData={homeData} productData={productData} />
        </StaticRouter>
      ,{
        bootstrapScripts:["/shared.bundle.js","/runtime.bundle.js","/main.bundle.js"],
        onShellReady(){
          res.setHeader("content-type","text/html");
          pipe(res)
        }
      });

}