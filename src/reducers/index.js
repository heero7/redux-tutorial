import { combineReducers } from 'redux';
import movies from './movies';

// variable holds all the reducers
const rootReducer = combineReducers({
    movies
})

// make this available for other components
export default rootReducer;