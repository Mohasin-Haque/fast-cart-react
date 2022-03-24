import { saree1 } from "../../../assets/index";

const ProductsCard = () => {
    return (
        <section>
            <div className="card-container">
                <div className="image-div">
                    <div className="overlay-image">
                        <img className="card-image"
                            src={saree1}
                            alt="error" />
                        <div className="dismiss"><i className="fas fa-heart heart-icon"></i></div>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="card-heading">Black Zari Banarasi Saree with Blouse
                    </h2>
                    <p className="card-author">Rs. 3,390 only</p>
                </div>
                <div className="card-actions">
                    <button className="card-btn">Buy</button>
                    <button className="card-btn">Add To Cart</button>
                    <i className="fas fa-heart"></i>
                </div>
            </div>
        </section>
    )
}

export { ProductsCard }