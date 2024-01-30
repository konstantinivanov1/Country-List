const initialState = {
    currentCountry:'',
    countryList: [],
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_COUNTRY':
            return {...state, currentCountry: action.payload};
        case 'SET_COUNTRY_LIST':
            return {...state, countryList: action.payload};
        default:
            return state
    }
}

export default countryReducer;