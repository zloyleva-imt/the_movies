import {combineReducers} from 'redux';

import moviesData from './fetchMoviesReducer';
import {connectRouter} from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    moviesData
});