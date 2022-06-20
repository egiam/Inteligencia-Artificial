import { Link } from "react-router-dom";

export const HomeContainer = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/list"}>Listado de productos</Link>
    </div>
  );
};
