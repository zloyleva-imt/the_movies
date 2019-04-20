import {combineReducers} from 'redux';

import movies from './fetchMoviesReducer';

export default combineReducers({
    movies
});