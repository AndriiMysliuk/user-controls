import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Add from './components/add/';
import Edit from './components/edit/';
import { Header } from './components/Header.styled';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header>
          <NavLink to="/">Add user</NavLink>
          <NavLink to="/edit">Edit user</NavLink>
        </Header>
        <div className="content">
          <Route exact path="/" component={Add} />
          <Route exact path="/edit" component={Edit} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
