import { CartCard, CartPriceCard } from "../../components/index";
import { Navbar } from "../../components/index";
import { useCartContext } from "../../context/ContextCart"
import { Link } from "react-router-dom";
import { emptyCart } from "../../assets/index";

const CartPage = () => {

    const { cartState } = useCartContext();

    const totalCartProductReducer = (prev, curr) => prev+curr.quantity;
    const totalCartProduct = cartState.cartProducts.reduce(totalCartProductReducer, 0);

    return(
        <div>
        <Navbar />
        <h3 className="heading heading-avatar heading-card heading-ecom">MY CART :  {totalCartProduct} </h3>
        <div className="cards-center flex-center">
      {cartState.cartProducts.map((product) =>{
              return <CartCard key={product.id} cartProducts={product}/>
          })}
          {totalCartProduct > 0 ? <CartPriceCard /> : <div><h2>Nothing here... Go to <Link to="/products" className="colored-text">products</Link> and add some items to cart.</h2>
          <img src={emptyCart} alt="error" />
          </div>
          }
          </div>
        </div>
    )
}

export { CartPage }