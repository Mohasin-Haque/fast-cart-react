import { categoryImg } from "../../../assets"

const CategoryCard = () => {
    return (
        <section>
            <div class="card-container card-cotegory">
                <div class="card-horizontal">
                    <div class="image-div">
                        <div class="overlay-image">
                            <img class="card-image image-horizontal image-cotegory"
                                src={ categoryImg }
                                alt="error" />
                            <div class="card-badge card-badge-cotegory">Out of Stock</div>
                        </div>
                    </div>
                    <div class="card-content">
                        <h2 class="card-heading">Printed Sarees</h2>
                        <p class="card-author">by MH Textiles and Sarees</p>
                        <p class="card-content">
                            Sarees for women. Look traditional.
                        </p>
                        <div class="card-actions">
                            <a class="btn btn-secondary btn-cotegory" href="./pages/product.html">Explore</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CategoryCard }