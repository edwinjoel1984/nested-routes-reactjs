export const ADD_TODO = 'ADD_TODO';
export const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS';

export const addNewToDo = (newTodo) =>{
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}
export const clearAllTodos = () =>{
    return {
        type: CLEAR_ALL_TODOS
    }
}
