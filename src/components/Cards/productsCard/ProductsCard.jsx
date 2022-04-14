const ProductsCard = ({ product }) => {
    // console.log("just checking..", product)
    return (
        <section>
            <div className="card-container">
                <div className="image-div">
                    <div className="overlay-image">
                        <img className="card-image"
                            src={product.image}
                            alt="error" />
                        <div className="dismiss"><i className="fas fa-heart heart-icon"></i></div>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="card-heading">{product.title}
                    </h2>
                    <p className="card-author">Price: {product.price}  <span> Discount: {product.discount}</span> </p>
                    <p className="card-author">Rating: {product.ratings}</p>
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