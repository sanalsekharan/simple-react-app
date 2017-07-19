import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Nav from  './components/Nav/Nav'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className = "container">
          <h1>Sanal's App</h1>
          <Nav />
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/about' component = {About} />
        </div>
      </Router>

    );
  }
}
