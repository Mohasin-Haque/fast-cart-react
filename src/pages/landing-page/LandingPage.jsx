import "./landing-page.css";
import { Navbar, CategoryCard, FeaturedCard } from "../../components/index";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <main>
                <section className="section section-main">
                    <div>
                        <img className="image-section"
                            src="https://cdn.shortpixel.ai/spai/q_+ret_img+to_webp/https://www.banarasisaree.com/wp-content/uploads/2021/11/slider-home-wedding-2nw.jpg"
                            alt="error" role="presentation" />
                        <div className="container">
                            <h3 className="heading heading-ecom">Flat 40% off for neogrammers
                            </h3>
                        </div>
                        <p className="about">
                            Welcome to fastcart. It's a e-commerce app which have a wide range of clothings and apparel. Choose the
                            cotagory to explore more.
                        </p>
                        <div className="btn-container">
                            <Link className="btn btn-primary" to="/products">Women's Wear</Link>
                            <Link className="btn btn-secondary" to="/products">Men's Wear</Link>
                        </div>
                    </div>
                </section>
            </main>
            <section className="featured-section">
                <h3 className="heading heading-avatar heading-card heading-ecom">Featured</h3>
                <div className="featured-product">
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                </div>
            </section>
            <section className="featured-section">
                <h3 className="heading heading-avatar heading-card heading-ecom">Category</h3>
                <div className="featured-product">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </section>
        </div>
    )
}

export { LandingPage }