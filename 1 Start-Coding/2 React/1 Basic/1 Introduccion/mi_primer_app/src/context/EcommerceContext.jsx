import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [ carrito, setCarrito ] = useState([]); //Hook

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=mac');
            const response = await data.json();
            setProducts(response.results);
          }
        fetchData();
    },[])

    return <EcommerceContext.Provider value={{products, carrito, setCarrito}}>
        {children}
    </EcommerceContext.Provider>
}