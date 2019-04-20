import {combineReducers} from 'redux';

import movies from './fetchMoviesReducer';
import {connectRouter} from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    movies
});