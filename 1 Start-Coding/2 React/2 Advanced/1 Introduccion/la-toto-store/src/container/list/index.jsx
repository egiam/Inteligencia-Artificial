import { Link } from "react-router-dom";

export const ListContainer = () => {
  return (
    <div>
      <h1>Listado de productos</h1>
      <strong>Titulo de una card</strong>
      <a href="#">$9.999</a>
      <Link to={"/product/idrandom"}>Ver producto</Link>
    </div>
  );
};
