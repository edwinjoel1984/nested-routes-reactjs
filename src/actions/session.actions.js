export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REFRESH_USER = 'REFRESH_USER';
export const BASE_URL = 'https://api.test.bucketdevelopment.com/v1';

export const login = (user) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/sessions`,
            {method:'post', 
            headers:{
                    'Content-Type': 'application/json'
                    }, 
            accept: 'application/vnd.ask.v1', 
            body:JSON.stringify(user)})
            .then(res=>res.json())
            .then(user =>{
                console.log(user)
                localStorage.setItem('user',JSON.stringify(user.data));
                dispatch(loginUser(user.data))
            }).catch(err=>{
                console.err(err)
            })

    }
}
export const loginUser = (user) =>{
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({type: LOGOUT});
    }
}

export const verifyUser = (isLogin) => {
    const currentUser = localStorage.getItem('user')
    console.info(JSON.parse(currentUser));
    return (dispatch) => {
        if(currentUser){
            console.info("SET THE CURRENT_USER")
           return dispatch({type:LOGIN,payload:JSON.parse(currentUser)})
        }else{
            if(!isLogin)
                window.location = '/'
            return dispatch({type:LOGOUT})
        }
     }
}