import axios from 'axios';

const url='http://localhost:3003/users';

export const addUsers= async(user)=>{
    return await axios.post(url,user);
}
