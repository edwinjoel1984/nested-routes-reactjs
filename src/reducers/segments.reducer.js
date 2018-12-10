import {FETCH_SEGMENTS, RESET_SEGMENTS} from '../actions/segmentation.actions'

let initialState =[]
export default (state= initialState, action) => {
    switch(action.type){
        case FETCH_SEGMENTS:
            return action.payload.reduce((prev, current)=> {
                prev[current.id] = current;
                return prev;
            }, state);
     
        case RESET_SEGMENTS:
            return initialState
        default:
            return state
    }
}