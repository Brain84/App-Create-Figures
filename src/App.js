import React, { Component } from 'react';
import Square from './components/Square';
import Circle from './components/Circle';
import Triangle from './components/Triangle';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li><Link to="/square">Square</Link></li>
              <li><Link to="/triangle">Triangle</Link></li>
              <li><Link to="/circle">Circle</Link></li>
            </ul>
          </nav>
          <main>
            <Route path="/square" component={Square} />
            <Route path="/circle" component={Circle} />
            <Route path="/triangle" component={Triangle} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;