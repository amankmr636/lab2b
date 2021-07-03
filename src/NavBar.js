import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyles=makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
        color:'#FFFFFF',
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
    })


const NavBar = ()=>{
    const classes=useStyles();

    return(

<AppBar className={classes.header} position='static'>
<Toolbar>
    <NavLink className={classes.tabs} to="./" exact>Home</NavLink>
    <NavLink className={classes.tabs} to="all" exact>ALL</NavLink>
    <NavLink className={classes.tabs} to="add" exact>ADD</NavLink>
    </Toolbar>    
</AppBar>

)}


export default NavBar;