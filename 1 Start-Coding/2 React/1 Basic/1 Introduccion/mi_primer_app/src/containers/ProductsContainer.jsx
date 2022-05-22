import CardComponent from "../component/CardComponent";
import { useContext, useEffect, useState } from 'react';
import InfoBarComponent from "../component/InfoBar"
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  // const [ carrito, setCarrito ] = useState([]); //Hook
  const { products, carrito, setCarrito } = useContext(EcommerceContext);


  // setProducts([{id: 1, name: 'shoes'}]); //Genera un bucle infinito
  useEffect(() => {

    //Se usa para montar un componente. Cuando todavia no se creo el componente pero esta por crearse.
    //Deberia haber la llamada a una API
    // const data = [
    //   {id: 1, name: 'shoes', img:"https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg"},
    //   {id: 2, name: 'shirt', img:"https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg"},
    //   {id: 3, name: 'book', img:"https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg"},
    // ];
    // setProducts(data);

    //Return: para cuando se esta por morir ese componente
    return () => {
      console.log("Se esta x morir el componente");
    }
  }, []);

  const AgregarAlCarrito = (event, product) => {
    carrito.push(product);
    setCarrito([...carrito]);
    console.log(carrito);
}

  // Separar componentes de su funcionalidad
  
  return (
    <div className="container bg-warning">

      <InfoBarComponent carrito = {carrito}/>

      <div className="row px-2 py-2">
        {products.map((element, index) => {
            return (
              <div key={index} className="col-4">
                <CardComponent product={element} agregarAlCarrito={AgregarAlCarrito} />
              </div>
            )
        })}

        {/* {products.map(element => {
          return (
              <CardComponent title={element.name} img={element.img} AgregarAlCarrito = {AgregarAlCarrito} />
          )
        })} */}
      </div>
    </div>
  );
};

export default ProductsContainer;
