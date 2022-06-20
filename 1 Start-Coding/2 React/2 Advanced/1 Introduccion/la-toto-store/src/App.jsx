import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeContainer } from "./container/home";
import { ListContainer } from "./container/list";
import { DetailContainer } from "./container/detail";

function App() {
  return;
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/list" component={ListContainer} />
      <Route path="/product/:id" component={DetailContainer} />
    </Switch>
  </BrowserRouter>;
}

export default App;
