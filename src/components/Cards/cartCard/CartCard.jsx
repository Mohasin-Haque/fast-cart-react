import React from 'react'
import { useCartContext } from "../../../context/ContextCart";

const CartCard = (product) => {
    const { cartState, cartDispatch } = useCartContext();

    const totalCartProductReducer = (prev, curr) => prev+curr.quantity;
    const totalCartProduct = cartState.cartProducts.reduce(totalCartProductReducer, 0);

    return (
        <div>
        <div class="cards-center flex-center">
            <section className="card-section">
                <div className="card-wrapper">
                    <div className="image">
                        <img className="cart-image" src={product.cartProducts.image}
                            alt="error" />
                    </div>
                    <div className="side-container">
                        <div className="heading-cart">
                            <h3>{product.cartProducts.title}</h3>
                        </div>
                        <div className="payment">
                            <p className="rate">Rs.{product.cartProducts.discount}  </p>
                            <del className="original-rate">Rs.{product.cartProducts.price}</del>
                        </div>
                        <div className="rate percent-off">
                            <p>50% off</p>
                        </div>
                        {/* {cartState.cartProducts.find((item) => item.id === product.id) ? ( */}
                            <div>
                                <div className="button-container">
                                    <div className="quantity">
                                        <p>Quantity: {totalCartProduct}</p>
                                    </div>
                                    <div className="button-div">
                                        <button className="cart-button increase"  onClick={() => cartDispatch({ type: "ITEM_INCREMENT", payload: product })}>+</button>
                                        <input type="number" className="cart-input" value={product.cartProducts.quantity}/>
                                        <button className="cart-button decrease"  onClick={() => cartDispatch({ type: "ITEM_DECREMENT", payload: product })}>-</button>
                                    </div>
                                </div>
                                <div className="action-container">
                                    <button className="action secondary-action font-weight" to="#"  onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: product})}>Remove From Cart</button>
                                </div>
                            </div>
                        {/* ) : ( */}
                            <div className="action-container">
                                <button className="action secondary-action font-weight" to="#">Move To Wishlist</button>
                            </div>
                        {/* )} */}
                    </div>
                </div>
                </section >
        </div>
  </div >
  )
}

export { CartCard }