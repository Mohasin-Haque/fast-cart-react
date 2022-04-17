import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "../src/context/ContextFilter";
import { CartContextProvider } from "../src/context/ContextCart";
import { WishlistContextProvider } from "../src/context/ContextWishlist";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <FilterContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </CartContextProvider>
        </FilterContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
