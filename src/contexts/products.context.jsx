import { useState } from "react";
import { createContext } from "react";
import PRODUCTS from "../shop-data.json";

export const ProdctContext = createContext({
    products: [],

});

export const ProductsProvider = ({children}) =>{
    const [products, setProducts]  = useState(PRODUCTS);
    const value = {products};
    return(
        <ProdctContext.Provider value={value}>{children}</ProdctContext.Provider>
    )
}