import React, { Suspense }  from "react";
import NavBar from "./components/navigation/navbar/index.tsx";
import { hydrateRoot } from 'react-dom/client';

//Importaciones de css y less
import './app.less';
import  Router  from "./router/index.tsx";
import { BrowserRouter } from "react-router-dom";
import PageLoader from "./components/common/pageLoader/index.tsx";

import { CartProvider} from "./contexts/cart/index.ts";
import {NotificationProvider} from "./contexts/notification/index.ts"
import {AuthProvider} from "./contexts/auth/index.ts"
import { Product } from "./models/product/index.ts";

export function App({homeData = [],productData = null}:{homeData:Product[],productData:Product | null}){
    return(
    <html lang="es">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Aplicacion con Server Side Rendering</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>

      <AuthProvider>
        <NotificationProvider>
          <CartProvider>  
            <NavBar/>
            <PageLoader/>
            <div className="main">
              <Router homeData={homeData} productData={productData}/>
            </div>
          </CartProvider>
        </NotificationProvider>
      </AuthProvider>
      </body>
    </html>

      
    );
}

if (typeof document !== 'undefined') {
  hydrateRoot(document, 
  <BrowserRouter>
  <App homeData={[]} productData={null} />
  </BrowserRouter>
  );
}