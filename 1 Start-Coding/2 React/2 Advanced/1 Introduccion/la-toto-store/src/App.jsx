import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeContainer } from "./container/home";
import { ListContainer } from "./container/list";
import { DetailContainer } from "./container/detail";
import { CartProvider } from "./context/Cart";

function App() {
  return;
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/list" component={ListContainer} />
        <Route path="/product/:id" component={DetailContainer} />
      </Switch>
    </CartProvider>
  </BrowserRouter>;
}

export default App;
