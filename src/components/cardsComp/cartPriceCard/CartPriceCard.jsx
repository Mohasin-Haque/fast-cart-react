import { useCartContext } from "../../../context/ContextCart"

const CartPriceCard = () => {
    const { cartState } = useCartContext();

    const totalCartPrice = () => {
        return cartState.cartProducts.reduce((prev, curr) => {
           return ( prev + ( curr.quantity*curr.price))
        }, 0)
    };

    const totalDiscountPrice = () => {
        return cartState.cartProducts.reduce((prev, curr) => {
           return ( prev + ( curr.quantity*curr.discount))
        }, 0)
    };
    const deliveryCharge = 300;
    return (
    <section className="details">
    <div className="price-details">
        <div className="filter-text price-text">PRICE DETAILS</div>
        <div className="font-weight flex-center flex-center-justify price-div">
            <p>Price </p>
            <p>Rs. {`${totalCartPrice()}`}</p>
        </div>
        <div className="font-weight flex-center flex-center-justify discount-div">
            <p>Discount</p>
            <p>- Rs. {`${totalDiscountPrice()}`}</p>
        </div>
        <div className="font-weight flex-center flex-center-justify delivery-div">
            <p>Delivery Charges</p>
            <p>Rs. 300</p>
        </div>
        <div className="flex-center flex-center-justify amount-div">
            <div className="filter-text">TOTAL AMOUNT </div>
            <div className="filter-text"> Rs.{`${totalCartPrice() - totalDiscountPrice() + deliveryCharge}`}</div>
        </div>
        <div className="font-weight price-div">
            <p>You will save Rs. {`${totalDiscountPrice()}`} on this order</p>
            <div className="flex-center">
                <button className="action primary-action order-btn" to="/checkout">PLACE ORDER</button>
            </div>
        </div>
    </div>
</section>
    )
}

export { CartPriceCard }