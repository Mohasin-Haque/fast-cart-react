import { categoryImg } from "../../../assets"

const CategoryCard = () => {
    return (
        <section>
            <div className="card-container card-cotegory">
                <div className="card-horizontal">
                    <div className="image-div">
                        <div className="overlay-image">
                            <img className="card-image image-horizontal image-cotegory"
                                src={ categoryImg }
                                alt="error" />
                            <div className="card-badge card-badge-cotegory">Out of Stock</div>
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="card-heading">Printed Sarees</h2>
                        <p className="card-author">by MH Textiles and Sarees</p>
                        <p className="card-content">
                            Sarees for women. Look traditional.
                        </p>
                        <div className="card-actions">
                            <a className="btn btn-secondary btn-cotegory" href="./pages/product.html">Explore</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CategoryCard }