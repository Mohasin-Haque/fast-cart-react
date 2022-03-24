import "./sidebar.css";

const Sidebar = () => {
    return (
        <div>
            <div class="sidebar">
                <div class="items">
                    <div class="filter flex-center">
                        <p class="filter-text">Filters</p>
                        <a href="/" class="clear-text">Clear</a>
                    </div>
                    <div class="slider-div">
                        <p class="filter-text flex-center">Price</p>
                        <div class="price-range flex-center">
                            <span>1000</span>
                            <span>2000</span>
                            <span>3000</span>
                        </div>
                        <div class="slider">
                            <div class="slidecontainer">
                                <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                            </div>
                        </div>
                    </div>
                    <div class="cotegory">
                        <div class="filter-text">Cotegory</div>
                        <div class="inputs flex-center">
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio" type="checkbox" checked />
                                Wedding Special
                            </label>
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio" type="checkbox" />
                                Festival Special
                            </label>
                        </div>
                    </div>
                    <div class="rating">
                        <div class="filter-text">Rating</div>
                        <div class="inputs flex-center">
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio" type="radio" checked />
                                4 Stars and above
                            </label>
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio" type="radio" />
                                3 Stars and above
                            </label>
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio" type="radio" />
                                2 Stars and above
                            </label>
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio" type="radio" />
                                1 Stars and above
                            </label>
                        </div>
                    </div>
                    <div class="sort-div">
                        <div class="filter-text">Sort by</div>
                        <div class="inputs flex-center">
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio-checked" type="radio" checked />
                                Price - Low to High
                            </label>
                            <label for="radio-unchecked">
                                <input class="radio-unchecked" name="radio" type="radio" />
                                Price - High to Low
                            </label>
                        </div>
                    </div>
                    <div class="advertisement">
                        <img src="https://www.indiansilkhouseagencies.com/common-new/images/klc/alt-flt.jpg?v=338" alt="error" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Sidebar }