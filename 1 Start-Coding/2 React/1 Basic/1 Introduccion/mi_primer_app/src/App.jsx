import "./App.css";
// import CardComponent from "./component/CardComponent";
import ProductsContainer from "./containers/ProductsContainer";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  return (
    <div className="App">
      <EcommerceProvider>
        {/* products container es el children de ecommerce provider */}
        <ProductsContainer />
      </EcommerceProvider>
    </div>
  );
}

export default App;
