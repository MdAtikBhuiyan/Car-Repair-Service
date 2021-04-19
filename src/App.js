import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Homepage/Home/Home';
import About from './components/Homepage/About/About';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Homepage/Services/Services';
import Review from './components/Homepage/Review/Review';
import Team from './components/Homepage/Team/Team';
import Contact from './components/Homepage/Contact/Contact';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/reviews'>
            <Review></Review>
          </Route>
          <Route path='/teams'>
            <Team></Team>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <PrivateRoute path='/dashBoard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
