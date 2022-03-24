import { Navbar, Sidebar, ProductsCard } from "../../components/index";
import { useState, useEffect } from "react";
import axios from "axios"; 
import "./products-page.css";

const ProductsPage = () => {
     
    useEffect(()=>{
        fetchProducts()
    }, []);

    const [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      setLoader(true);
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
}
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="main-container-components">
                <div className="products-div flex-center">
                    <p className="filter-text">Showing all Products </p> <span> ( showing 6 products ) </span>
                </div>
                <div className="flex-center products-container">
                {loader && <div>Loading...</div>}
                    { products.map((items) => {
                        return  <ProductsCard key={items.id} products={items} />
                    }) }
                
                </div>
            </div>
        </div>
    )
}

export { ProductsPage }