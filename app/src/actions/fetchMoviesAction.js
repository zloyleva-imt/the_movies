import axios from 'axios';
export default () => {
    return dispatch => {
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie?api_key=657885c66046f5bc9672126b266dbd51"
        })
            .then(res =>{
                console.log(res.data);
                dispatch({type:"FETCH_MOVIES", payload:res.data});
            });
    }
};