import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCountry, setCountryList } from "../actions/actions";
import { fetchAllCountries } from "../api/apiService";
import { Link } from "react-router-dom";

const AllCountries = () => {
    const dispatch = useDispatch();
    const countryList = useSelector((state) => state.country.countryList);
    const searchInput = useSelector((state) => state.filter.searchInput);
    const region = useSelector((state) => state.filter.region);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const fetchedData = await fetchAllCountries();
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching countries:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    },[dispatch]); 

    useEffect(() => {
        if(data){
            const sortedCountries = [...data].sort((a,b) => a.name.common.localeCompare(b.name.common));
            dispatch(setCountryList(sortedCountries));
        }
    },[data, dispatch]);    

    const handleCountryBoxClick = (name) => {
        dispatch(setCurrentCountry(name));
        localStorage.setItem('currentCountry', name);
    }

    const emptyListCheck = () => {
        const list = document.getElementById('countries-list');
        return !list || !list.innerText.trim();
    }

    const emptyList = emptyListCheck();

    
    return (
        <div id="countries-holder" className="all-countries-holder">
            {isLoading && <p>Loading...</p>}
            {!isLoading && countryList === null ? (
                <p>No data available.</p>
            ) : (
                countryList &&
                countryList.filter(country => !region || country.region.toLowerCase() === region)
                            .filter(country => !searchInput || country.name.common.toLowerCase().includes(searchInput.toLowerCase()))
                            .map((country, index) => (
                        <div key={index} onClick={() => handleCountryBoxClick(country.name.common)} className="country-box">
                            <Link to="/single-country">
                                <h3>{country.name.common}</h3>
                                <img src={country.flags.svg} alt={country.name.common}/>
                            </Link>
                        </div>
                    ))
            )}
            {!emptyList && <p>No data</p>}
        </div>
    );
    
};

export default AllCountries;
