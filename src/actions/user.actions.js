export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const RESET_USERS = 'RESET_USERS';

export const getAllUsers = () => {
    return (dispatch) => {
         fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res=>res.json())
            .then(users =>{
                dispatch(fetchUsers(users))
            })

    }
}
export const fetchUsers = (users) =>{
    return {
        type: FETCH_USERS,
        payload: users
    }
}
export const resetUsers = () =>{
    return {
        type: RESET_USERS
    }
}

export const addUser = (newUser) => {
    return (dispatch) => {
        dispatch({type: ADD_USER, payload:newUser});
    }
}