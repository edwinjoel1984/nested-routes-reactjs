import todosReducer from './todos.reducer'
import usersReducer from './users.reducer'
import sessionReducer from './session.reducer'
import segmentsReducer from './segments.reducer'
import { reducer as formReducer } from 'redux-form'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer,
    segments: segmentsReducer,
    currentUser: sessionReducer,
    form: formReducer
})

export default rootReducer;
