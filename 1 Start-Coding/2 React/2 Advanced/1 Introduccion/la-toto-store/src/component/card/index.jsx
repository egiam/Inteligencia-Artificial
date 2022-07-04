import react from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ props }) => {
  return (
    <div key={props.product.id}>
      <strong>{props.product.name}</strong>
      <a href="#">${props.product.price}</a>
      <Link to={`/product/${props.product.id}`}>Ver producto</Link>
    </div>
  );
};

export default CardProduct;
