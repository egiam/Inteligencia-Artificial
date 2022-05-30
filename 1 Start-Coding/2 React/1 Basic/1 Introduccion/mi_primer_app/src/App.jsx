import "./App.css";
// import CardComponent from "./component/CardComponent";
import ProductsContainer from "./containers/ProductsContainer";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import { EcommerceProvider } from "./context/EcommerceContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import { useDispatch, useSelector } from "react-redux";
import addElementToCart from "./redux/actions/cart";

function App() {
  const STATE = useSelector((state) => state.cartReducer); //Redux state hook
  const dispatch = useDispatch(); //Dispara acciones

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addElementToCart({ id: 1, name: "shirt", price: 3000 }));
        }}
      >
        Agregar al Carrito
      </button>
      <BrowserRouter>
        <EcommerceProvider>
          <Switch>
            {/* Home Container */}
            <Route exact path="/">
              {/* Barra (/) sola para q sea el path de inicio */}
              <HomeContainer />
            </Route>

            {/* products container es el children de ecommerce provider */}
            {/* Cuando la path sea productos, nos va a mostrar products container
            Exact para q la ruta sea exacta sin añadidos */}
            <Route exact path="/productos">
              <ProductsContainer />
            </Route>

            {/* Ruta dinamica para buscar distintos productos */}
            <Route path="/productos/:busqueda">
              <ProductsContainer />
            </Route>
          </Switch>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
