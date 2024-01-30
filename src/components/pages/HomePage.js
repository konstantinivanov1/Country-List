import React from "react";
import AllCountries from "../allCountries";
import FilterPanel from "../FilterPanel";

const HomePage = () => {
    return(
        <div className="home-page">
            <FilterPanel />
            <AllCountries />
        </div>
    )
}

export default HomePage;
