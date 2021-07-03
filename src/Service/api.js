import axios from 'axios';

const url='http://localhost:3003/users';

export const getusers=async(id)=>{
    id=id||'';
    return await axios.get(`${url}/${id}`);
}

