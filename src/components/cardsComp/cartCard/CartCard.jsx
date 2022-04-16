import React from 'react'
import { useCartContext } from "../../../context/ContextCart";

const CartCard = (product) => {
    const { cartDispatch } = useCartContext();
    return (
        <div className='cart-cards'>
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
                            <p className="rate">Rs. {product.cartProducts.price} </p>
                            <del className="original-rate">Rs. {product.cartProducts.discount}</del>
                        </div>
                        <div className="rate percent-off">
                            <p>10% off</p>
                        </div>
                            <div>
                                <div className="button-container">
                                    <div className="quantity">
                                        <p>Quantity: </p>
                                    </div>
                                    <div className="button-div">
                                        <button className="cart-button increase"  onClick={() => cartDispatch({ type: "ITEM_INCREMENT", payload: product.cartProducts })}>+</button>
                                        <label htmlFor="quantity" className="cart-input">{product.cartProducts.quantity}</label>
                                        <button className="cart-button decrease"  onClick={() => cartDispatch({ type: "ITEM_DECREMENT", payload: product.cartProducts })}>-</button>
                                    </div>
                                </div>
                                <div className="action-container">
                                    <button className="card-btn action secondary-action font-weight" to="#"  onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: product.cartProducts})}>Remove From Cart </button>
                                </div>
                            </div>
                            <div className="action-container">
                                <button className="card-btn action secondary-action font-weight" to="#">Move To Wishlist</button>
                            </div>
                    </div>
                </div>
                </section >
        </div>
  </div >
  )
}

export { CartCard }