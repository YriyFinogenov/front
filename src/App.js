import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
             <li>
                 <Link to='registration'>Registration</Link>
             </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/registration' component={RegistrationPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
