import { useState,useEffect } from "react";
import { getusers } from "../Service/api";
import { TableCell,TableRow,TableHead,Table,TableBody,makeStyles,Button } from "@material-ui/core";
import {Link} from "react-router-dom";
import { deleteUser } from "../Service/api4";
const useStyles=makeStyles(
    {
        table:{
            width:'90%',
            margin:'50px 0 0 50px'
        
        },
        thead:{
            '& > *':{
                background:'#000000',color:'#FFFFFF',fontSize:20 
                    
            }, 

            row:{
                '& > *':{

                    fontSize:20
                }
            
            }


        }
    }

);
const AllUsers = () =>{
    const [users,setUsers]=useState([]);
    const classes=useStyles();

    useEffect(()=>{
      getAllUsers();
    },[])


    const getAllUsers= async()=>{
    const response=await getusers();
    setUsers(response.data);    
    }

    const deleteUserData=async(id)=>{
        await deleteUser(id) ;
        getAllUsers();   
    }
    
    
    
    return(
    <Table className={classes.table} >
<TableHead >
    <TableRow className={classes.thead}>
         
        <TableCell>Name </TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone </TableCell>
        <TableCell></TableCell>
    </TableRow>
</TableHead>
<TableBody>
{

    users.map(user=>(

    <TableRow className={classes.row}>
               <TableCell>{user.name}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell><Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
        

        <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button></TableCell>
    </TableRow>
    ))
}
</TableBody>
    </Table>


    
    )
    
    }
    
    export default AllUsers; 