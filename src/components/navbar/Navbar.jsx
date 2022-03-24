import "../navbar/navbar.css";
import { useState } from "react";
import classNames from "classnames";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <nav className="navbar-ecom">
                <a href="../index.html" className="brand-title-ecom">fastcart</a>
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/"><i className="bi bi-heart"></i> wishlist</a></li>
                        <li><a href="/"><i className="bi bi-cart"></i>cart</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export { Navbar }