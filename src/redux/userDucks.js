const initialData = {
    name: ''
}

const SET_NAME_SUCCESS = 'SET_NAME_SUCCESS';

export default function setNameUserReducer(state = initialData , action ){
    switch(action.type){
        case SET_NAME_SUCCESS:
            return {...state, name: action.payload}
        default:
            return state
    }
};

export const setNameUserAction = (name) => async(dispatch) => {
    await dispatch({
        type: SET_NAME_SUCCESS,
        payload: name
    })
};