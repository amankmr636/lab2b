import { FormGroup,FormControl,InputLabel,Input,Button,makeStyles,Typography} from "@material-ui/core";
import { useEffect, useState } from "react";
import {editUsers} from '../Service/api3';
import { useHistory,useParams} from "react-router";
import { getusers } from "../Service/api";


const useStyles=makeStyles(
  
   {container:{
        width:'50%',margin:'5% 0 0 25%',
        '& > *':{
            marginTop:20
        }
   } }
)

const initialValues={
    name:'',username:'',email:'',phone:''

}

const EditUsers = () =>{
    const [user,setUser]=useState(initialValues);
    const {name,username,email,phone}=user;
    const {id}=useParams();
    
    const classes=useStyles();

    const history=useHistory();


    useEffect(()=>{loadUserData();},[])
    
    const loadUserData=async() => {
       const response=await getusers(id);
        setUser(response.data);
    }


    const onValueChange=(e) =>{
        setUser({...user,[e.target.name]:e.target.value})

        

    }

const editUserDetails =async()=>{
    await editUsers(id,user);
    history.push("./all");
}

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">EDIT USER</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone}/>
            </FormControl>
<Button variant="contained" color="primary" onClick={()=>editUserDetails()} >EDIT USER</Button>
        </FormGroup>
        
    )
    
    }
    
    export default EditUsers;