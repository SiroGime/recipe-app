const initialData = {
    dataRecipe: []
};

const GET_DATA_RECIPE_SUCCESS = 'GET_DATA_RECIPE_SUCCESS';

export default function getRecipeReducer(state = initialData, action){
    switch(action.type){
        case GET_DATA_RECIPE_SUCCESS:
            return { ...state, dataRecipe: action.payload }
        default:
            return state
    }
};

export const getRecipeAction = (recipe) => async(dispatch) => {
    await dispatch({
        type: GET_DATA_RECIPE_SUCCESS,
        payload: recipe
    })
};