import axios from 'axios';

const url='http://localhost:3003/users';



export const deleteUser= async(id)=>{
    return await axios.delete(`${url}/${id}`);
}   