import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { fetchSingleCountry } from "../api/apiService";
import { setCurrentCountry } from "../actions/actions";

const SingleCountry = () => {
    
    const currentCountryRedux = useSelector((state) => state.country.currentCountry);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (country) => {
        try {
            setIsLoading(true);
            const fetchedData = await fetchSingleCountry(country);
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching cards in component:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (currentCountryRedux) {
            fetchData(currentCountryRedux);
        } else {
            const storedCountry = localStorage.getItem('currentCountry');
            if (storedCountry) {
                dispatch(setCurrentCountry(storedCountry));
                fetchData(storedCountry);
            }
        }
    }, [currentCountryRedux, dispatch]); 

    return(
        <div className="single-country">
            <p>Data: {JSON.stringify(data)}</p>
        </div>
    )
}

export default SingleCountry;