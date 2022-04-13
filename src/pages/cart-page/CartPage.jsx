// // import { useState } from "react";
// import { CartCard } from "../../components/cards/cartCard/CartCard";
// import { Navbar } from "../../components/index";
// import { useReducer } from "react";
// // import productsDb from "./api/products";
 
// const CartPage = () => {
//     // const[cartCounter, setCartCounter] = useState(0);


//     const reducerFn = (state, value) => {
//         switch (value.type) {
//           case "ADD_TO_CART":
//             const checker = state.cartProducts.find((item) => {
//               return item.id === value.payload.id;
//             });
//             if (checker) {
//               return {
//                 ...state,
//                 TotalItems: state.TotalItems + 1,
//                 TotalAmount: state.TotalAmount + value.payload.price,
//                 cartProducts: state.cartProducts.map((item) =>
//                   item.id === value.payload.id
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//                 )
//               };
//             }
    
//             return {
//               ...state,
//               TotalItems: state.TotalItems + 1,
//               TotalAmount: state.TotalAmount + value.payload.price,
//               cartProducts: [
//                 ...state.cartProducts,
//                 { ...value.payload, quantity: 1 }
//               ]
//             };
    
//           case "REMOVE_FROM_CART":
//             const checkerRemove = state.cartProducts.find((item) => {
//               return item.id === value.payload.id;
//             });
    
//             if (checkerRemove) {
//               return {
//                 ...state,
//                 TotalItems: state.TotalItems - 1,
//                 TotalAmount: state.TotalAmount - value.payload.price,
//                 cartProducts: state.cartProducts.map((item) =>
//                   item.id === value.payload.id
//                     ? { ...item, quantity: item.quantity - 1 }
//                     : item
//                 )
//               };
//             }
    
//             return {
//               ...state,
//               TotalItems: state.TotalItems,
//               TotalAmount: state.TotalAmount,
//               cartProducts: [...state.cartProducts]
//             };
    
//           // return {
//           //   ...state,
//           //   TotalItems: state.TotalItems - 1,
//           //   TotalAmount: state.TotalAmount - value.payload.price
//           //   // cartProducts: [...state.cartProducts,value.payload.product]
//           // };
//           default:
//             return state;
//         }
//       };
//       const [state, dispatch] = useReducer(reducerFn, {
//         TotalItems: 0,
//         TotalAmount: 0,
//         cartProducts: []
//       });
    
//       const prodDisplay = productsDb.map((item) => (
//         <div key={item.id}>
//           {item.name} - {item.price} -{" "}
//           <button
//             onClick={() =>
//               dispatch({
//                 type: "ADD_TO_CART",
//                 payload: item
//               })
//             }
//           >
//             Add to Cart
//           </button>
//           <button
//             onClick={() =>
//               dispatch({
//                 type: "REMOVE_FROM_CART",
//                 payload: item
//               })
//             }
//           >
//             Remove from Cart
//           </button>
//         </div>
//       ));


//     return(
//         <div>
//         <Navbar />
//         <h3 className="heading heading-avatar heading-card heading-ecom">MY CART </h3>
//         <div className="cards-center flex-center">

//       <p>Total Items in Cart: {state.TotalItems}</p>
//       <p>Total value of cart: {state.TotalAmount}</p>
//       <p>Items in Cart :</p>{" "}
//       {state.cartProducts.map((item) => (
//         <p key={item.id}>
//           {item.name} - quantity - {item.quantity}
//         </p>
//       ))}
//       <hr />
//       <h2>Products</h2>
//       {prodDisplay}


//         {/* import { useReducer } from "react";
// import "./styles.css";
// import { productsDb } from "./products";

// export default function App() {
//   const reducerFn = (state, value) => {
//     switch (value.type) {
//       case "ADD_TO_CART":
//         const checker = state.cartProducts.find((item) => {
//           return item.id === value.payload.id;
//         });
//         if (checker) {
//           return {
//             ...state,
//             TotalItems: state.TotalItems + 1,
//             TotalAmount: state.TotalAmount + value.payload.price,
//             cartProducts: state.cartProducts.map((item) =>
//               item.id === value.payload.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             )
//           };
//         }

//         return {
//           ...state,
//           TotalItems: state.TotalItems + 1,
//           TotalAmount: state.TotalAmount + value.payload.price,
//           cartProducts: [
//             ...state.cartProducts,
//             { ...value.payload, quantity: 1 }
//           ]
//         };

//       case "REMOVE_FROM_CART":
//         const checkerRemove = state.cartProducts.find((item) => {
//           return item.id === value.payload.id;
//         });

//         if (checkerRemove) {
//           return {
//             ...state,
//             TotalItems: state.TotalItems - 1,
//             TotalAmount: state.TotalAmount - value.payload.price,
//             cartProducts: state.cartProducts.map((item) =>
//               item.id === value.payload.id
//                 ? { ...item, quantity: item.quantity - 1 }
//                 : item
//             )
//           };
//         }

//         return {
//           ...state,
//           TotalItems: state.TotalItems,
//           TotalAmount: state.TotalAmount,
//           cartProducts: [...state.cartProducts]
//         };

//       // return {
//       //   ...state,
//       //   TotalItems: state.TotalItems - 1,
//       //   TotalAmount: state.TotalAmount - value.payload.price
//       //   // cartProducts: [...state.cartProducts,value.payload.product]
//       // };
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducerFn, {
//     TotalItems: 0,
//     TotalAmount: 0,
//     cartProducts: []
//   });

//   const prodDisplay = productsDb.map((item) => (
//     <div key={item.id}>
//       {item.name} - {item.price} -{" "}
//       <button
//         onClick={() =>
//           dispatch({
//             type: "ADD_TO_CART",
//             payload: item
//           })
//         }
//       >
//         Add to Cart
//       </button>
//       <button
//         onClick={() =>
//           dispatch({
//             type: "REMOVE_FROM_CART",
//             payload: item
//           })
//         }
//       >
//         Remove from Cart
//       </button>
//     </div>
//   ));
//   return (
//     <div className="App">
//       <h1>Cart</h1>
//       <p>Total Items in Cart: {state.TotalItems}</p>
//       <p>Total value of cart: {state.TotalAmount}</p>
//       <p>Items in Cart :</p>{" "}
//       {state.cartProducts.map((item) => (
//         <p key={item.id}>
//           {item.name} - quantity - {item.quantity}
//         </p>
//       ))}
//       <hr />
//       <h2>Products</h2>
//       {prodDisplay}
//     </div>
//   );
// } */}



//             <CartCard />
//             <section className="details">
//                 <div className="price-details">
//                     <div className="filter-text price-text">PRICE DETAILS</div>
//                     <div className="font-weight flex-center flex-center-justify price-div">
//                         <p>Price </p>
//                         <p>Rs. 6000</p>
//                     </div>
//                     <div className="font-weight flex-center flex-center-justify discount-div">
//                         <p>Discount</p>
//                         <p>- Rs. 3000</p>
//                     </div>
//                     <div className="font-weight flex-center flex-center-justify delivery-div">
//                         <p>Delivery Charges</p>
//                         <p>Rs. 0</p>
//                     </div>
//                     <div className="flex-center flex-center-justify amount-div">
//                         <div className="filter-text">TOTAL AMOUNT</div>
//                         <div className="filter-text">Rs. 3000</div>
//                     </div>
//                     <div className="font-weight price-div">
//                         <p>You will save Rs. 3000 on this order</p>
//                         <div className="flex-center">
//                             <button className="action primary-action order-btn" to="/checkout">PLACE ORDER</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     </div>
//     )
// }

// export { CartPage }