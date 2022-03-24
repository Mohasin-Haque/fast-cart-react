import { featuredImg } from "../../../assets/index";

const FeaturedCard = () => {
    return (
        <section>
            <div className="card-container">
                <div className="image-div">
                    <div className="overlay-image">
                        <img className="card-image"
                            src={featuredImg}
                            alt="error" />
                        <div className="card-badge card-badge-ecom">New</div>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="card-heading">Red Banarasi Silk Traditional Saree</h2>
                    <p className="card-author">by MH Textiles and Sarees</p>
                    <p className="card-content">
                        Give yourself a traditional look by this traditional banarasi silk saree. Made with pure
                        silk
                        and zari fabrics.
                    </p>
                </div>
                <div className="card-actions">
                    <button className="card-btn">Buy</button>
                    <button className="card-btn">Add To Cart</button>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-share-alt"></i>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </section>
    );
}

export { FeaturedCard }