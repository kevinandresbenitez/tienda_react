import React, { createContext, useContext, ReactNode } from 'react';
import { Product } from '../../models/product/index.ts';

interface DataContextType {
    homeData: Product[];
    productData: Product | null;
}

const DataContext = createContext<DataContextType>({
    homeData: [],
    productData: null,
});

interface DataProviderProps {
    children: ReactNode;
    homeData: Product[];
    productData: Product | null;
}

export const DataProvider = ({ children, homeData, productData }: DataProviderProps) => {
    return (
        <DataContext.Provider value={{ homeData, productData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useInitialData = () => useContext(DataContext);
