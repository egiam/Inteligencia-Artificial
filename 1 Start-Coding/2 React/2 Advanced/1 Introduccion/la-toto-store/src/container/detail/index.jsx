import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Cart";
import { useEffect } from "react";

export const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); //Busca el parametro que se genera de ID en el URL y lo guarda en la variable id.
  const { listProducts } = useContext(CartContext); //Usa el contexto de CartContext.

  useEffect((id) => {
    let result = listProducts.filter((product) => product.id === Number(id)); //Filtra el producto que se encuentra en la lista de productos.
    setProduct(result[0]); //Guarda el producto en la variable product.
  }, []);

  return (
    <>
      URL
      <h1>
        {product.name} - {id}
      </h1>
      <strong>No tengo descripcion</strong>
      <a href="#">${product.price}</a>
      <button>Comprar</button>
    </>
  );
};
