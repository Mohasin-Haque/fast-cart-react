import { categoryImg } from "../../assets/index";
import { useProductsFilter } from "../../context/ContextFilter";
import "./sidebar.css";

const Sidebar = () => {

    const { state, dispatch } = useProductsFilter();

    return (
        <div>
            <div className="sidebar">
                <div className="items">
                    <div className="filter flex-center">
                        <p className="filter-text">Filters</p>
                        <p className="clear-text" onClick={() => dispatch({ type: "CLEAR_ALL" })}>Clear</p>
                    </div>
                    <div className="slider-div">
                        <p className="filter-text flex-center">Price</p>
                        <div className="price-range flex-center">
                            <span>1000</span>
                            <span>2000</span>
                            <span>3000</span>
                        </div>
                        <div className="slider">
                            <div className="slidecontainer">
                                <input type="range" min={1000} max={9999} step={500} defaultValue={3500} className="slider" id="myRange" onChange={(e) =>
                                    dispatch({ type: "RANGE", payload: e.target.value })
                                } />
                            </div>
                        </div>
                    </div>
                    <div className="cotegory">
                        <div className="filter-text">Category</div>
                        <div className="inputs flex-center">
                            <label htmlFor="weddingSpecial">
                                <input className="radio-unchecked" name="category" type="checkbox" value="weddingSpecial"
                                    onChange={() => dispatch({ type: "CATEGORY", payload: "weddingSpecial" })}
                                    checked={state.category.weddingSpecial} />
                                Wedding Special
                            </label>
                            <label htmlFor="festivalSpecial">
                                <input className="radio-unchecked" name="category" type="checkbox" value="festivalSpecial"
                                    onChange={() => dispatch({ type: "CATEGORY", payload: "festivalSpecial" })}
                                    checked={state.category.festivalSpecial} />
                                Festival Special
                            </label>
                            <label htmlFor="silkSpecial">
                                <input className="radio-unchecked" name="category" type="checkbox" value="silkSpecial"
                                onChange={() => dispatch({ type: "CATEGORY", payload: "silkSpecial" })}
                                checked={state.category.silkSpecial} />
                                Silk Special
                            </label>
                        </div>
                    </div>
                    <div className="rating">
                        <div className="filter-text">Rating</div>
                        <div className="inputs flex-center">
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="rating" type="radio" onChange={() => dispatch({ type: "RATING", payload: "4" })}
                                    // checked={state.rating === 4}
                                />
                                4 Stars and above
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="rating" type="radio" onChange={() => dispatch({ type: "RATING", payload: "3" })}
                                    // checked={state.rating === 3}
                                />
                                3 Stars and above
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="rating" type="radio" onChange={() => dispatch({ type: "RATING", payload: "2" })}
                                    // checked={state.rating === 2}
                                />
                                2 Stars and above
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="rating" type="radio" onChange={() => dispatch({ type: "RATING", payload: "1" })}
                                    // checked={state.rating === 1}
                                />
                                1 Stars and above
                            </label>
                        </div>
                    </div>
                    <div className="sort-div">
                        <div className="filter-text">Sort by</div>
                        <div className="inputs flex-center">
                            <label htmlFor="low-to-high">
                                <input className="radio-unchecked" name="sorting" type="radio" value="low-to-high" onChange={() =>
                                    dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                                }
                                    // checked={state.sortBy === "LOW_TO_HIGH"}
                                />
                                Price - Low to High
                            </label>
                            <label htmlFor="high-to-low">
                                <input className="radio-unchecked" name="sorting" type="radio" value="high-to-low" onChange={() =>
                                    dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                                }
                                    // checked={state.sortBy === "HIGH_TO_LOW"}
                                />
                                Price - High to Low
                            </label>
                        </div>
                    </div>
                    <div className="advertisement">
                        <img src={categoryImg} alt="error" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Sidebar }