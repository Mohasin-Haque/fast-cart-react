import { featuredImg } from "../../assets/index";

import "./sidebar.css";

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="items">
                    <div className="filter flex-center">
                        <p className="filter-text">Filters</p>
                        <a href="/" className="clear-text">Clear</a>
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
                                <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" />
                            </div>
                        </div>
                    </div>
                    <div className="cotegory">
                        <div className="filter-text">Cotegory</div>
                        <div className="inputs flex-center">
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio" type="checkbox" defaultChecked />
                                Wedding Special
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio" type="checkbox" />
                                Festival Special
                            </label>
                        </div>
                    </div>
                    <div className="rating">
                        <div className="filter-text">Rating</div>
                        <div className="inputs flex-center">
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio" type="radio" defaultChecked />
                                4 Stars and above
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio" type="radio" />
                                3 Stars and above
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio" type="radio" />
                                2 Stars and above
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio" type="radio" />
                                1 Stars and above
                            </label>
                        </div>
                    </div>
                    <div className="sort-div">
                        <div className="filter-text">Sort by</div>
                        <div className="inputs flex-center">
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio-checked" type="radio" defaultChecked />
                                Price - Low to High
                            </label>
                            <label htmlFor="radio-unchecked">
                                <input className="radio-unchecked" name="radio" type="radio" />
                                Price - High to Low
                            </label>
                        </div>
                    </div>
                    <div className="advertisement">
                        <img src={ featuredImg } alt="error" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Sidebar }