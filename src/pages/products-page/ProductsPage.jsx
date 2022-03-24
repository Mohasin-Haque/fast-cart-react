import { Navbar, Sidebar, ProductsCard } from "../../components/index";
import "./products-page.css";

const ProductsPage = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="main-container-components">
                <div className="products-div flex-center">
                    <p className="filter-text">Showing all Products </p> <span> ( showing 6 products ) </span>
                </div>
                <div className="flex-center products-container">
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                </div>
            </div>
        </div>
    )
}

export { ProductsPage }