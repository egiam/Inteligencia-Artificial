import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const list = [
    { id: 1, name: "Producto 1", price: 3000 },
    { id: 2, name: "Producto 2", price: 2500 },
    { id: 3, name: "Producto 3", price: 4500 },
  ];
  const [listProducts, setListProducts] = useState(list);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ listProducts }}>
      {children}
    </CartContext.Provider>
  );
};
