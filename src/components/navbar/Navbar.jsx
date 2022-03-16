import "../navbar/navbar.css";

const Navbar = () => {
return(
    <div>
        <nav class="navbar-ecom">
            <a href="../index.html" class="brand-title-ecom">fastcart</a>
            <a href="#" class="toggle-button-ecom">
                <span class="bar-ecom"></span>
                <span class="bar-ecom"></span>
                <span class="bar-ecom"></span>
            </a>
            <div class="search-box-ecom">
                <input type="search" placeholder="search" />
                <span class="fa fa-search"></span>
            </div>
            <div class="navbar-links-ecom">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">cart</a></li>
                    <li><a href="#">wishlist</a></li>
                </ul>
            </div>
        </nav>
    </div>
)
}

export { Navbar }