import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { setRegion, setSearchInput } from "../actions/actions";

const FilterPanel = () => {

    const dispatch = useDispatch();
    const [selectedRegion, setSelectedRegion] = useState('');
    const [currentSearchInput, setCurrentSearchInput] = useState('')

    const handleSearchInputChange = (e) => {
        setCurrentSearchInput(e.target.value);
    }

    const handleFilterByRegion = (e) => {
        setSelectedRegion(e.target.value);
    }

    const handleResetClick = (e) => {
        e.preventDefault();
        setSelectedRegion('');
        setCurrentSearchInput('');
        dispatch(setSearchInput(''));
        dispatch(setRegion(''));
    }

    const handleFilterClick = (e) => {
        e.preventDefault();
        dispatch(setSearchInput(currentSearchInput));
        dispatch(setRegion(selectedRegion));
    }

    return(
        <form className="filter-holder">
            <div className="form-group">
                <label htmlFor="searchInput">
                    Search by Name:
                </label>
                <input  id="searchInput"
                        name="searchInput"
                        value={currentSearchInput || ''}
                        placeholder="Ex. Bulgaria"
                        onChange={(e) => {handleSearchInputChange(e)}}
                />
            </div>
            <div className="form-group">
                <label htmlFor="filterRegion">
                    Filter by Region:
                </label>
                <select id="filterRegion"
                        name="filterRegion"
                        onChange={(e) => handleFilterByRegion(e)}
                        value={selectedRegion || ''}>
                    <option value=''>All regions</option>
                    <option value="europe">Europe</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="antartic">Antarctic</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div className="buttons-holder">
                <button onClick={(e) => handleResetClick(e)}>
                    Reset
                </button>
                <button onClick={(e) => handleFilterClick(e)}>
                    Filter
                </button>
            </div>
        </form>
    )
}

export default FilterPanel;