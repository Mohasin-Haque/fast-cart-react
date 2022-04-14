const WishlistCard = () => {
    return(
        <section className="card-section">
                <div className="card-wrapper">
                    <div className="image">
                        <img className="cart-image"
                            src="https://unsplash.it/400"
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
                        <div className="action-container">
                            <button to="/cart" className="action secondary-action font-weight">Move to Cart</button>
                            <button to="/checkout" className="action primary-action font-weight">Checkout</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export { WishlistCard }