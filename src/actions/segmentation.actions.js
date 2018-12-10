export const FETCH_SEGMENTS = 'FETCH_SEGMENTS';
// export const ADD_USER = 'ADD_USER';
export const RESET_SEGMENTS = 'RESET_SEGMENTS';
export const BASE_URL = 'https://api.test.bucketdevelopment.com/v1';

export const getSegments = () => {
    const currentUser=JSON.parse(localStorage.getItem('user'));
    console.info(currentUser);
    return (dispatch) => {
         fetch(`${BASE_URL}/segmentation_funnels/search_segmentation_funnels/list?&page=1`, 
                { method:'get', 
                    headers:{
                        "Authorization": currentUser.attributes.access_token,
                        'Content-Type': 'application/json' 
                        }
                })
            .then(res=>res.json())
            .then(segments =>{
                console.clear();
                console.warn(segments)
                dispatch({
                    type: FETCH_SEGMENTS,
                    payload: segments.data
                })
            })
            .catch(error => {
                console.error(error);
                // alert('No authenticated');
                // localStorage.removeItem('user');
                // window.location = '/'
            })
    }
}
export const resetSegments = () =>{
    return {
        type: RESET_SEGMENTS
    }
}

// export const addUser = (newUser) => {
//     return (dispatch) => {
//         dispatch({type: ADD_USER, payload:newUser});
//     }
// }