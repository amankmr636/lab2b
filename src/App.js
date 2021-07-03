import NavBar from './NavBar';
import Code from './Code';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import NotFound from './NotFound';
import EditUsers from './Components/EditUsers';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (<>

<BrowserRouter>
<NavBar/>
<Switch>
<Route exact path="/" component={Code}/>
<Route exact path="/all" component={AllUsers}/>
<Route exact path="/add" component={AddUsers}/>
<Route exact path="/edit/:id" component={EditUsers}/>
<Route component={NotFound}/>
</Switch>
</BrowserRouter>
</>
  );
}

export default App;
