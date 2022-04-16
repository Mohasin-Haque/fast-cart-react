import { Link } from "react-router-dom";

const CategoryCard = ({product}) => {
    return (
        <section>
            <div className="card-container card-cotegory">
                <div className="card-horizontal">
                    <div className="image-div">
                        <div className="overlay-image">
                            <img className="card-image image-horizontal image-cotegory"
                                src={ product.image }
                                alt="error" />
                            <div className="card-badge card-badge-cotegory">Out of Stock</div>
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="card-heading">{ product.title }</h2>
                        <p className="card-author">by MH Textiles and Sarees</p>
                        <p className="card-content">
                            { product.description }
                        </p>
                        <div className="card-actions">
                            <Link to="/products" className="btn btn-secondary btn-cotegory">Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CategoryCard }