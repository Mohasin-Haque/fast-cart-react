import { Navbar, WishlistCard } from "../../components/index";
import "./wishlist-page.css";
import { useWishlistContext } from "../../context/ContextWishlist";
import { Link } from "react-router-dom";
import { emptyWishlist } from "../../assets/index";

const WishlistPage = () => {

    const {wishlistState } = useWishlistContext();

    return (
        <div>
            <Navbar />
        <h3 className="heading heading-avatar heading-card heading-ecom">MY WISHLIST : {wishlistState.wishlistData.length} </h3>
        <div className="cards-center flex-center">
          {wishlistState.wishlistData.length === 0 ? (
              <div>
                  <h2>Nothing here... Go to <Link to="/products" className="colored-text">products</Link> and add some items to wishlist.</h2>
                  <img src={emptyWishlist} alt="error" />
              </div>
          ) : (
              <div>
                  {wishlistState.wishlistData.map((product) => {
                      return (
                          <div>
                              <WishlistCard key={product.id} product={product}/>
                          </div>
                      )
                  })}
              </div>
          )}
        </div>
        </div>
    )
}

export { WishlistPage }