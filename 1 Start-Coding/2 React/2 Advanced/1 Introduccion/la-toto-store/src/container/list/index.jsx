import { useState } from "react";
import { Link } from "react-router-dom";

export const ListContainer = () => {
  const list = [
    { id: 1, name: "shoes", description: "this is a shoe", price: 999 },
    { id: 2, name: "shirt", description: "this is a shirt", price: 999 },
    { id: 3, name: "pants", description: "this is a pants", price: 999 },
  ];
  const [products, setProducts] = useState(list); // Instancia por default los productos dentro de la lista

  return (
    <>
      <h1>Listado de productos</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <strong>{product.name}</strong>
            <a href="#">${product.price}</a>
            <Link to={`/product/${product.id}`}>Ver producto</Link>
          </div>
        );
      })}
    </>
  );
};
