const filterlState = {
    region:'',
    searchInput: '',
}

const filterReducer = (state = filterlState, action) => {
    switch (action.type) {
        case 'SET_REGION':
            return {...state, region: action.payload};
        case 'SET_SEARCH_INPUT':
            return {...state, searchInput: action.payload};
        default:
            return state
    }
}

export default filterReducer;