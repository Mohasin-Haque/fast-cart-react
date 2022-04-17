const FeaturedCard = ({product}) => {
    return (
        <section>
            <div className="card-container">
                <div className="image-div">
                    <div className="overlay-image">
                        <img className="card-image"
                            src={product.featImg}
                            alt="error" />
                        <div className="card-badge card-badge-ecom">New</div>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="card-heading">{product.featTitle}</h2>
                    <p className="card-author">by MH Textiles and Sarees</p>
                    <p className="card-content">
                        {product.featDesc}
                    </p>
                </div>
                {/* // This feature will be live after review. */}
                {/* <div className="card-actions">
                   <Link to="/login"><button className="card-btn" >Buy</button></Link>
                    <button className="card-btn" onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: product })}>Add To Cart</button>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-share-alt"></i>
                    <i className="fas fa-ellipsis-v"></i>
                </div> */}
            </div>
        </section>
    );
}

export { FeaturedCard }