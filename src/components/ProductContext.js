import { createContext, useContext, useState } from "react";


const ProductContext = createContext();

export const ProductProvider = ({children}) =>{

    // const[productId,setProductId] = useState(null);
    const[product,setProduct]  = useState(null);
    // const[productAmount, setProductAmount] = useState(null);

    return(
        <ProductContext.Provider value={{product,setProduct}}>
            {children}
        </ProductContext.Provider>
        

    );
};

export const UseProduct = () => useContext(ProductContext);