import {ADD_TODO, CLEAR_ALL_TODOS} from '../actions/todo.actions'

let initialState = [];

export default (state=initialState, action) =>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]
        case CLEAR_ALL_TODOS:
            return initialState
        default:
            return state;
    }
}