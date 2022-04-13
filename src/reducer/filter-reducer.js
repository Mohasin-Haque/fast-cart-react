const initialState = {
  sortBy: null,
  category: {
       weddingSpecial: true,
       festivalSpecial: true,
       silkSpecial: true
     },
  rating: 1,
  range: 9999,
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "RANGE":
      return { ...state, range: action.payload };
    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };
    case "CLEAR_ALL":
      return {
        sortBy: null,
        category: {
          weddingSpecial: true,
          festivalSpecial: true,
          silkSpecial: true
        },
        search: "",
        rating: 1,
        range: 9999,
      };
    default:
      return state;
  }
};

const getSortedProducts = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.discount - a.discount);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.discount - b.discount);
  }
  return products;
};


const getFilteredProducts = (
  products,
  categoryObject,
  rating,
  range
) => {
  return products
    .filter((product) => categoryObject[product.categories])
    .filter((product) => (rating === 1 ? true : rating < product.ratings))
    .filter((product) => product.discount <= range)
};

export { filterReducer, initialState, getSortedProducts, getFilteredProducts };
