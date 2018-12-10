export const BASE_URL = 'https://api.test.bucketdevelopment.com/v1/';

function login (user) {
    return fetch(`${BASE_URL}/sessions`,{method:'post',body:JSON.stringify(user)})
            .then(res=>res.json())
            .then(users =>{
                console.log(users);
            })
}
const user ={
    email: 'edwin.ulloa@ideaware.co',
    password: '123456'
}
login(user);
