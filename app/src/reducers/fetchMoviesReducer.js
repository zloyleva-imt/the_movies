export default (state = [], action) => {

    if(action.type === "FETCH_MOVIES"){
        return action.payload
    }

    return state;
};