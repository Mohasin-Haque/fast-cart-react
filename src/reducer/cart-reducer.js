const cartReducer = ( state, action ) => {
    switch(action.type){
        case "ADD_TO_CART": 
        return {...state, cartProducts: [...state.cartProducts, { ...action.payload, quantity: 1}]}
        case "REMOVE_FROM_CART": 
        return {...state, cartProducts: state.cartProducts.filter((product) => product.id !== action.payload.id)
        }
        case "ITEM_INCREMENT":
            return {...state, cartProducts: state.cartProducts.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1 } : product)
        }
        case "ITEM_DECREMENT":
            return {...state, cartProducts: state.cartProducts.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity } : product)
        }
        default :
            return state;
    }
}

export { cartReducer }