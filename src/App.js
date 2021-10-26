import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import UserDetails from './Components/UserDetails';
import Users from './Components/Users';

  function App() {

    return (
      <Router>
         <div className="App">
           <Navbar/>
          </div>
          
          <Switch>
            

              <Route exact path="/users">
                <Users/>
              </Route>

              <Route exact path="/users/:userid">
                <UserDetails/>
              </Route>

          </Switch>
         
      </Router>
       

       

   
    );
}
 
export default App;