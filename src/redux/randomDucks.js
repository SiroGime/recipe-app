import axios from 'axios';

const initialData = {
    array: []
};

const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';

export default function randomRecipeReducer(state = initialData, action){
    switch(action.type){
        case GET_RECIPE_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
};

export const getRandomRecipeAction = () => async(dispatch, getState) => {
    try{
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
        dispatch({
            type: GET_RECIPE_SUCCESS,
            payload: res.data.meals
        })
    } catch(error){
        console.log(error);
    }
};