// import { useState } from "react";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
// import Product from "./Product.jsx";
import Product from "./components/Product.jsx";
import CartContextProvider from "./store/soppingCard.jsx";

function App() {
  return (
    <>
      {/* <Header /> */}
      <CartContextProvider>
        {console.log("hellooooooooooooo")}
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </>
  );
}

export default App;
