import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import randomRecipeReducer from './randomDucks';
import searchRecipesReducer from './searchDucks';
import setNameUserReducer from './userDucks';
import getRecipeReducer from './recipeDucks';
import addRecipeToFavoriteReducer from './favoritesDucks';

const rootReducer = combineReducers({
    randomRecipe: randomRecipeReducer,
    searchRecipes: searchRecipesReducer,
    setNameUser: setNameUserReducer,
    getRecipe: getRecipeReducer,
    addRecipeToFavorite: addRecipeToFavoriteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}