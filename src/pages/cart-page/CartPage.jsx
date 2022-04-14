import { CartCard, CartPriceCard } from "../../components/index";
import { Navbar } from "../../components/index";
import { useCartContext } from "../../context/ContextCart"

const CartPage = () => {

    const { cartState } = useCartContext();
    return(
        <div>
        <Navbar />
        <h3 className="heading heading-avatar heading-card heading-ecom">MY CART </h3>
        <div className="cards-center flex-center">
      {cartState.cartProducts.map((product) =>{
              return <CartCard key={product.id} cartProducts={product}/>
          })}
          <CartPriceCard />
          </div>
        </div>
    )
}

export { CartPage }