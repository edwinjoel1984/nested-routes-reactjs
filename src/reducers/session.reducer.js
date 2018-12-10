import {LOGIN, LOGOUT} from '../actions/session.actions'

let initialState ={}
export default (state= initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {...state,...action.payload}
        case LOGOUT:
            return initialState
        default:
            return state
    }
}