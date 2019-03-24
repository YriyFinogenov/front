import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginnedUsers from './pages/LoginnedUsers/LoginnedUsers';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/registration' component={RegistrationPage}/>
          <Route exact path='/onlyLoginUsers' component={LoginnedUsers}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
