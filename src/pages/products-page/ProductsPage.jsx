import { Navbar, Sidebar, ProductsCard } from "../../components/index";
import "./products-page.css";

const ProductsPage = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div class="main-container-components">
                <div class="products-div flex-center">
                    <p class="filter-text">Showing all Products </p> <span> ( showing 6 products ) </span>
                </div>
                <div class="flex-center products-container">
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