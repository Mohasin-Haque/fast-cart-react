import "../navbar/navbar.css";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/ContextCart";
import { useWishlistContext } from "../../context/ContextWishlist";

const Navbar = () => {
    const { cartState } = useCartContext();
    const { wishlistState } = useWishlistContext();
    const [isOpen, setIsOpen] = useState(false);
    const openNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <nav className="navbar-ecom">
                <Link className="brand-title-ecom" to="/">fastcart</Link>
                <div onClick={openNav} href="/" className="toggle-button-ecom">
                    <span className="bar-ecom"></span>
                    <span className="bar-ecom"></span>
                    <span className="bar-ecom"></span>
                </div>
                <div className="search-box-ecom">
                    <input type="search" placeholder="search" />
                    <span className="fa fa-search"></span>
                </div>
                <div className={classNames("navbar-links-ecom", { "navbar-links-ecom active": isOpen })}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/wishlist"><i className="bi bi-heart"><span className="badges badge-small">{wishlistState.wishlistData.length}</span></i> wishlist</Link></li>
                        <li><Link to="/cart"><i className="bi bi-cart"><span className="badges badge-small">{cartState.cartProducts.length}</span></i>cart</Link></li>
                        <li><Link to="/login"><i className="bi bi-person"></i>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export { Navbar }