import React from 'react'

const CartCard = () => {
  return (
    <section className="card-section">
                <div className="card-wrapper">
                    <div className="image">
                        <img className="cart-image"
                            src="https://saree.b-cdn.net/media/catalog/product/cache/b338d39772b77a6788c692c0fe37ef74/s/a/saci7057a-orange-banarasi-silk-all-over-woven-saree.jpg"
                            alt="error" />
                    </div>
                    <div className="side-container">
                        <div className="heading-cart">
                            <h3>Banarasi Saree</h3>
                        </div>
                        <div className="payment">
                            <p className="rate">Rs. 3000</p>
                            <del className="original-rate">Rs. 6000</del>
                        </div>
                        <div className="rate percent-off">
                            <p>50% off</p>
                        </div>
                        <div className="button-container">
                            <div className="quantity">
                                <p>Quantity: </p>
                            </div>
                            <div className="button-div">
                                <button className="cart-button increase" >+</button>
                                <input type="number" className="cart-input" />
                                <button className="cart-button decrease">-</button>
                            </div>
                        </div>
                        <div className="action-container">
                            <button className="action secondary-action font-weight" to="#">Remove From Cart</button>
                            <button className="action primary-action font-weight" to="#">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export { CartCard }