import { FormGroup,FormControl,InputLabel,Input,Button,makeStyles,Typography} from "@material-ui/core";
import { useState } from "react";
import {addUsers} from '../Service/api2';
import { useHistory } from "react-router";


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

const AddUsers = () =>{
    const [user,setUser]=useState(initialValues);
    const {name,username,email,phone}=user;
    const classes=useStyles();

    const history=useHistory();

    const onValueChange=(e) =>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
        

    }

const addUserDetails =async()=>{
    await addUsers(user);
    history.push('./all');
}

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">ADD USER</Typography>
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
<Button variant="contained" color="primary" onClick={()=>addUserDetails()} >ADD USER</Button>
        </FormGroup>
        
    )
    
    }
    
    export default AddUsers;