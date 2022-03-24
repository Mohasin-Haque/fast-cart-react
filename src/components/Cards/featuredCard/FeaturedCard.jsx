import { featuredImg } from "../../../assets/index";

const FeaturedCard = () => {
    return (
        <section>
            <div class="card-container">
                <div class="image-div">
                    <div class="overlay-image">
                        <img class="card-image"
                            src={featuredImg}
                            alt="error" />
                        <div class="card-badge card-badge-ecom">New</div>
                    </div>
                </div>
                <div class="card-content">
                    <h2 class="card-heading">Red Banarasi Silk Traditional Saree</h2>
                    <p class="card-author">by MH Textiles and Sarees</p>
                    <p class="card-content">
                        Give yourself a traditional look by this traditional banarasi silk saree. Made with pure
                        silk
                        and zari fabrics.
                    </p>
                </div>
                <div class="card-actions">
                    <button class="card-btn">Buy</button>
                    <button class="card-btn">Add To Cart</button>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-share-alt"></i>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </section>
    );
}

export { FeaturedCard }