import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration/Registration';

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'/>
          <Route path='/registration' component={Registration}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
