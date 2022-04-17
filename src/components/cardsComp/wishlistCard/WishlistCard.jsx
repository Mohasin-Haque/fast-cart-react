import { useWishlistContext } from "../../../context/ContextWishlist";
import { useCartContext } from "../../../context/ContextCart";

const WishlistCard = ({ product }) => {
    const { wishlistDispatch } = useWishlistContext();
    const { cartDispatch } = useCartContext();
    return (
        <section className="card-section">
            <div className="card-wrapper">
                <div className="image">
                    <img className="cart-image"
                        src={product.image}
                        alt="error" />
                </div>
                <div className="side-container">
                    <div className="heading-cart">
                        <h3>{product.title}</h3>
                    </div>
                    <div className="payment">
                        <p className="rate">Rs. {product.price}</p>
                        <del className="original-rate">Rs. {product.discount}</del>
                    </div>
                    <div className="rate percent-off">
                        <p>50% off</p>
                    </div>
                    <div className="action-container">
                        <button to="/cart" className="action secondary-action font-weight" onClick={() => wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })}>Remove from Wishlist</button>
                        <button to="/checkout" className="action primary-action font-weight" onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: product })}>Move to Cart</button>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export { WishlistCard }