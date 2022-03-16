import "../navbar/navbar.css";

const Navbar = () => {
return(
    <div>
        <nav className="navbar-ecom">
            <a href="../index.html" className="brand-title-ecom">fastcart</a>
            <a href="#" className="toggle-button-ecom">
                <span className="bar-ecom"></span>
                <span className="bar-ecom"></span>
                <span className="bar-ecom"></span>
            </a>
            <div className="search-box-ecom">
                <input type="search" placeholder="search" />
                <span className="fa fa-search"></span>
            </div>
            <div className="navbar-links-ecom">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#"><i className="bi bi-heart"></i> wishlist</a></li>
                    <li><a href="#"><i className="bi bi-cart"></i>cart</a></li>
                </ul>
            </div>
        </nav>
    </div>
)
}

export { Navbar }