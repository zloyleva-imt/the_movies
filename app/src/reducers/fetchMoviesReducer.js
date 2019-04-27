const initState = {
    page: null,
    total_results: null,
    total_pages: null,
    results: []
};

export default (state = initState, action) => {

    if(action.type === "FETCH_MOVIES"){
        return action.payload
    }

    return state;
};