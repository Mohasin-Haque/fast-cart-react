import { useCartContext } from "../../../context/ContextCart"

const CartPriceCard = () => {
    // const { cartState } = useCartContext();

    // const totalCartPriceReducer = (prev, curr) => prev + (curr.quantity*curr.price);
    // const totalCartPrice = cartState.cartPrducts.reduce(totalCartPriceReducer, 0);

    return (
    <section className="details">
    <div className="price-details">
        <div className="filter-text price-text">PRICE DETAILS</div>
        <div className="font-weight flex-center flex-center-justify price-div">
            <p>Price </p>
            <p>Rs. 6000</p>
        </div>
        <div className="font-weight flex-center flex-center-justify discount-div">
            <p>Discount</p>
            <p>- Rs. 3000</p>
        </div>
        <div className="font-weight flex-center flex-center-justify delivery-div">
            <p>Delivery Charges</p>
            <p>Rs. 0</p>
        </div>
        <div className="flex-center flex-center-justify amount-div">
            <div className="filter-text">TOTAL AMOUNT</div>
            <div className="filter-text">Rs. </div>
        </div>
        <div className="font-weight price-div">
            <p>You will save Rs. 3000 on this order</p>
            <div className="flex-center">
                <button className="action primary-action order-btn" to="/checkout">PLACE ORDER</button>
            </div>
        </div>
    </div>
</section>
    )
}

export { CartPriceCard }