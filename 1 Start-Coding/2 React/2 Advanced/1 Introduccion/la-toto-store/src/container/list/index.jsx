import { lazy, Suspense, useContext } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cart";
// import { CardProduct } from "../../component/card";

const CardProduct = lazy(() => import("../../component/card"));

export const ListContainer = () => {
  const { listProducts } = useContext(CartContext);

  return (
    <>
      <h1>Listado de productos</h1>
      {listProducts.map((product) => {
        return (
          //Suspende el componente CardProduct hasta que se cargue. El componente CardProduct se carga solo cuando se hace click en el boton de comprar.
          <Suspense fallback={<div>Cargando...</div>}>
            <CardProduct product={product} />
          </Suspense>
        );
      })}
    </>
  );
};
