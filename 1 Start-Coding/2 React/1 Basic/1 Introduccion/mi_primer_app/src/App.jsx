import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./component/CardComponent";
import ProductsContainer from "./containers/ProductsContainer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <ProductsContainer />
    </div>
  );
}

export default App;
