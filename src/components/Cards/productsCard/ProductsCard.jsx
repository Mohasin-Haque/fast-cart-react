import { saree1 } from "../../../assets/index";

const ProductsCard = () => {
    return (
        <section>
            <div class="card-container">
                <div class="image-div">
                    <div class="overlay-image">
                        <img class="card-image"
                            src={saree1}
                            alt="error" />
                        <div class="dismiss"><i class="fas fa-heart heart-icon"></i></div>
                    </div>
                </div>
                <div class="card-content">
                    <h2 class="card-heading">Black Zari Banarasi Saree with Blouse
                    </h2>
                    <p class="card-author">Rs. 3,390 only</p>
                </div>
                <div class="card-actions">
                    <button class="card-btn">Buy</button>
                    <button class="card-btn">Add To Cart</button>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        </section>
    )
}

export { ProductsCard }