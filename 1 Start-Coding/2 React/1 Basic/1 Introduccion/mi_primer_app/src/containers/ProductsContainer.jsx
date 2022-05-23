import CardComponent from "../component/CardComponent";
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import InfoBarComponent from "../component/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  // const [ carrito, setCarrito ] = useState([]); //Hook
  const { products, carrito, setCarrito, fetchData, setProducts } =
    useContext(EcommerceContext);
  const { busqueda } = useParams();

  // setProducts([{id: 1, name: 'shoes'}]); //Genera un bucle infinito
  useEffect(() => {
    fetchData(busqueda);
    return () => {};
  }, [busqueda]);

  const AgregarAlCarrito = (event, product) => {
    carrito.push(product);
    setCarrito([...carrito]);
    console.log(carrito);
  };

  const handleKeyUp = (e) => {
    const productsFilter = products.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
        return true;
      }
      return false;
    });
    // Seteamos los productos q filtramos
    setProducts(productsFilter);
  };

  // Separar componentes de su funcionalidad

  return (
    <div className="container bg-warning">
      <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />

      <div className="row px-2 py-2">
        {products.map((element, index) => {
          return (
            <div key={index} className="col-4">
              <CardComponent
                product={element}
                agregarAlCarrito={AgregarAlCarrito}
              />
            </div>
          );
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
