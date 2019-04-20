export default () => {
    return dispatch => {
        setTimeout(()=>{
            const res = ["Film 1"];
            dispatch({type:"FETCH_MOVIES", payload:res});
        }, 2000);
    }
};