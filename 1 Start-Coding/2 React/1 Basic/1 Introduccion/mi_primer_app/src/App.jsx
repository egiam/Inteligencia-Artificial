import "./App.css";
// import CardComponent from "./component/CardComponent";
import ProductsContainer from "./containers/ProductsContainer";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import { EcommerceProvider } from "./context/EcommerceContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <div className="App">
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
