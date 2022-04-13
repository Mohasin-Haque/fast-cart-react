import { Navbar, Sidebar, ProductsCard } from "../../components/index";
import { useState, useEffect } from "react";
import axios from "axios";
import "./products-page.css";
import { useProductsFilter } from "../../context/ContextFilter";
import {
    getSortedProducts,
    getFilteredProducts
} from "../../reducer/filter-reducer";


const ProductsPage = () => {

    const [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        try {
            setLoader(true);
            const response = await axios.get("/api/products");
            setProducts(response.data.products);
            setLoader(false);
        } catch (error) {
            console.error(error, "Happy Diwali, API phat gyi!!");
        }
    }
    const { state } = useProductsFilter();

    const { category, rating, sortBy, range  } = state;

    const sortedProducts = getSortedProducts(products, sortBy);
    const filteredProducts = getFilteredProducts(sortedProducts, category, rating, range );

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="main-container-components">
                <div className="flex-center products-container">
                    {loader && <div>Loading...</div>}
                    {filteredProducts.map((product) => ( <ProductsCard key={product._id} product={product} /> )
                    )}
                </div>
            </div>
        </div>
    )
}

export { ProductsPage }