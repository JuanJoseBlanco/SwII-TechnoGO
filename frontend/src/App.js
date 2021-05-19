import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              TechnoGO
            </a>
          </div>
          <div>
            <a href="/cart">Carrito de compras</a>
            <a href="/signin">Ingresar</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component ={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">Derechos reservados. 2021</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
