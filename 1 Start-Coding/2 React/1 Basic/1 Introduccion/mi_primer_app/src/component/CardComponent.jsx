// import { useState } from 'react';

const CardComponent = ({ product, agregarAlCarrito}) => {
  return (
      <div className="card">
          <img className="card-img-top" src={product.thumbnail} alt={product.title}/>
          <div className="card-body">
              <h5 className="card-title">{product.title} - <b>$ {product.price}</b></h5>
              <button className="btn btn-primary" onClick={(event) => { agregarAlCarrito(event, product) }}>Agregar al carrito</button>
          </div>
      </div>
  )
}

// const CardComponent = ({ title, img, AgregarAlCarrito }) => {
//   // const [ carrito, setCarrito] = useState([]) //Hook
//   // // const carrito = [];

//   // function AgregarAlCarrito(event, name) {
//   //   carrito.push(name);
//   //   setCarrito([...carrito]); //
//   // }

//   return (
//     <div className="card col-4">
//       {/* {carrito.length} */}
//       <img src={img} classNameName="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <button
//           className="btn btn-primary"
//           onClick={(event) => {
//             AgregarAlCarrito(event, title);
//           }}
//         >
//           Agregar al Carrito
//         </button>
//       </div>
//     </div>
//   );
// };

export default CardComponent;
