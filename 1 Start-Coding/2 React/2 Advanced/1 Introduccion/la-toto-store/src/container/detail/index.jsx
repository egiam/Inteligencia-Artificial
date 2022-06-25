import { useParams } from "react-router-dom";

export const DetailContainer = () => {
  const { id } = useParams(); //Busca el parametro que se genera de ID en el URL y lo guarda en la variable id.

  return (
    <>
      URL
      <h1>Nombre del producto - {id}</h1>
      <strong>Descripcion</strong>
      <a href="#">$9.999</a>
      <button>Comprar</button>
    </>
  );
};
