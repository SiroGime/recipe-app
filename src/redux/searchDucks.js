import axios from 'axios';

const initialData = {
    array: [],
    name: ''
};

const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
const GET_NAME_RECIPE_SUCCESS ='GET_NAME_RECIPE_SUCCESS';

export default function searchRecipesReducer(state = initialData, action){
    switch(action.type){
        case GET_RECIPES_SUCCESS:
            return {...state, array: action.payload}
        case GET_NAME_RECIPE_SUCCESS:
            return {...state, name: action.payload}
        default:
            return state
    }
};

export const getNameRecipesAction = (value) => async(dispatch) => {
    await dispatch({
        type: GET_NAME_RECIPE_SUCCESS,
        payload: value
    })
}

export const getSearchRecipesAction = () => async(dispatch, getState) => {
    const {name} = getState().searchRecipes;
    try{
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        dispatch({
            type: GET_RECIPES_SUCCESS ,
            payload: res.data.meals
        })
    } catch(error){
        console.log(error);
    }
}

// 