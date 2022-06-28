import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cart";

export const ListContainer = () => {
  const { listProducts } = useContext(CartContext);

  return (
    <>
      <h1>Listado de productos</h1>
      {listProducts.map((product) => {
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
