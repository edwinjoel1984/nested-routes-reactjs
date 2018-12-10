import {FETCH_USERS, RESET_USERS} from '../actions/user.actions'

let initialState =[]
export default (state= initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return [...state,...action.payload]
        case RESET_USERS:
            return initialState;
        default:
            return state
    }
}