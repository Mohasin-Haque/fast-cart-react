import { Navbar, WishlistCard } from "../../components/index";
import "./wishlist-page.css";

const WishlistPage = () => {
    return (
        <div>
            <Navbar />
        <h3 className="heading heading-avatar heading-card heading-ecom">MY WISHLIST </h3>
        <div className="cards-center flex-center">
            <WishlistCard />                
        </div>
        </div>
    )
}

export { WishlistPage }