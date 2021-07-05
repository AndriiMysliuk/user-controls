import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Add from './components/add/';
import Edit from './components/edit/';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <header style={{ padding: 10 }}>
          <NavLink to="/" style={{ margin: 5 }}>
            Add user
          </NavLink>
          <NavLink to="/edit" style={{ margin: 5 }}>
            Edit user
          </NavLink>
        </header>
        <div className="content">
          <Route exact path="/" component={Add} />
          <Route exact path="/edit" component={Edit} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
