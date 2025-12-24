import React, { Suspense } from "react";
import NavBar from "./components/navigation/navbar/index.tsx";
import { hydrateRoot } from 'react-dom/client';

//Importaciones de css y less
import './app.less';
import Router from "./router/index.tsx";
import { BrowserRouter } from "react-router-dom";
import PageLoader from "./components/common/pageLoader/index.tsx";

import { CartProvider } from "./contexts/cart/index.ts";
import { NotificationProvider } from "./contexts/notification/index.ts"
import { AuthProvider } from "./contexts/auth/index.ts"
import { Product } from "./models/product/index.ts";
import { DataProvider, useInitialData } from "./contexts/initialData/index.tsx";

declare global {
  interface Window {
    __INITIAL_DATA__: {
      homeData: any[];
      productData: any | null;
    };
  }
}

export function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aplicacion con Server Side Rendering</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>

        <AuthProvider>
          <NotificationProvider>
            <CartProvider>
              <NavBar />
              <PageLoader />
              <div className="main">
                <Router />
              </div>
            </CartProvider>
          </NotificationProvider>
        </AuthProvider>
      </body>
    </html>


  );
}

if (typeof document !== 'undefined') {
  const initialData = window.__INITIAL_DATA__ || { homeData: [], productData: null };
  const homeData = initialData.homeData.map((p: any) => Product.hydrate(p));
  const productData = initialData.productData ? Product.hydrate(initialData.productData) : null;

  hydrateRoot(document,
    <BrowserRouter>
      <DataProvider homeData={homeData} productData={productData}>
        <App />
      </DataProvider>
    </BrowserRouter>
  );
}