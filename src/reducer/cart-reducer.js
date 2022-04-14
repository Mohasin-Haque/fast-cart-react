// import { useReducer } from "react";
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
// }
