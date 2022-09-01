import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "../src/context/ContextFilter";
import { CartContextProvider } from "../src/context/ContextCart";
import { WishlistContextProvider } from "../src/context/ContextWishlist";
import { Auth0Provider } from "@auth0/auth0-react";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <FilterContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
          <Auth0Provider
    domain="dev-vzlf7n2t.us.auth0.com"
    clientId="PvE2GfT4iXF04oDLevChZQ2wZf28xHDj"
    redirectUri={window.location.origin}
  >
            <App />
            </Auth0Provider>
          </WishlistContextProvider>
        </CartContextProvider>
        </FilterContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
