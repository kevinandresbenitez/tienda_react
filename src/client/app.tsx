import React, { Suspense }  from "react";
import NavBar from "./components/navbar/index.tsx";
import { hydrateRoot } from 'react-dom/client';

//Importaciones de css y less
import './app.less';
import  Router  from "./router/index.tsx";
import { BrowserRouter } from "react-router-dom";
import PageLoader from "./components/pageLoader/index.tsx";

import { TrolleyProvider } from "./contexts/trolley/index.tsx";
import {NotificationProvider} from "./contexts/notification/index.tsx"

export function App(){
    return(
    <html lang="es">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Aplicacion con Server Side Rendering</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>

      <NotificationProvider>
        <TrolleyProvider>  
          <NavBar/>
          <PageLoader/>
          <div className="main">
          
            <Router />
          
          </div>
        </TrolleyProvider>
      </NotificationProvider>
        
      </body>
    </html>

      
    );
}

if (typeof document !== 'undefined') {
  hydrateRoot(document, 
  <BrowserRouter>
  <App />
  </BrowserRouter>
  );
}