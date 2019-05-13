import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import LoginPage from './Auth/LoginPage';
import JokesPage from './Landing/JokesPage';
import SignupPage from './Auth/SignupPage'

function App(props) {
  function logout() {
    localStorage.removeItem('token');
    props.history.push('/login');
  }

  return (
    <div>
      <header>
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/register">Signup</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/jokes">Jokes</NavLink>
        &nbsp;|&nbsp;
        <button type="button" onClick={logout}>Logout</button>
      </header>
      <main>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={SignupPage} />
        <Route path="/jokes" component={JokesPage} />
      </main>
    </div>
  );
}

export default withRouter(App);
