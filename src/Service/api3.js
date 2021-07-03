import axios from 'axios';

const url='http://localhost:3003/users';



export const editUsers= async(id,user)=>{
    return await axios.put(`${url}/${id}`,user);
}