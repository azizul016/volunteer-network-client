import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Volunteer from './component/Volunteer/Volunteer';
import NotFound from './component/NotFound/NotFound';
import LogIn from './component/LogIn/LogIn';
import RegisterFrom from './component/RegisterFrom/RegisterFrom';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import TotalActivities from './component/TotalActivities/TotalActivities';
import AddUser from './component/Add User/AddUser';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [volunteer, setVolunteer] = useState([])
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, volunteer, setVolunteer }}>
      <Router>
        <Switch>
          <Route path="/home">
            <Volunteer />
          </Route>
          <Route exact path="/">
            <Volunteer />
          </Route>
          <PrivateRoute path="/addUsers">
            <AddUser></AddUser>
          </PrivateRoute>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <PrivateRoute path="/VolunteerDetails/:volunteerId">
            <RegisterFrom />
          </PrivateRoute>
          <Route path="/totalActivities">
            <TotalActivities />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
