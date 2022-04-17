const wishlistReducer = ( state, action ) => {
    switch(action.type){
        case "ADD_TO_WISHLIST": 
        return {...state, wishlistData: [...state.wishlistData, { ...action.payload, quantity: 1}]}
        case "REMOVE_FROM_WISHLIST": 
        return {...state, wishlistData: state.wishlistData.filter((product) => product._id !== action.payload._id)
        }
        default :
            return state;
    }
}

export { wishlistReducer }