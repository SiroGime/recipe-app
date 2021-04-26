const initialData = {
    array: []
}

const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';

export default function addRecipeToFavoriteReducer(state = initialData, action){
    switch(action.type){
        case ADD_RECIPE_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
};

export const addRecipeToFavoriteAction = (card) => async(dispatch) => {
    await dispatch({
        type: ADD_RECIPE_SUCCESS,
        payload: card
    })
};