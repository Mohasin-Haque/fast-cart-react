import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <section className="badge_container-main flex-center">
                <div className="center flex-center">
                    <h1 className="error-code">404</h1>
                    <h1 className="heading-ecom error-message">Oops! page not found</h1>
                    <div className="flex-center buttons">
                        <Link className="btn btn-primary" to="/">Home</Link>
                        <Link className="btn btn-secondary" to="/products">Products</Link>
                    </div>
                </div>
            </section>
    )
}

export { NotFound }