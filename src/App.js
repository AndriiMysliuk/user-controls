import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import Add from './components/add/';
import Edit from './components/edit/';

const StyledHeader = styled.header`
  padding: 10px;
  a {
    margin: 15px;
    text-decoration: none;
    color: #000;
    font-size: 24px;
    font-family: serif;
  }
  a:hover {
    text-decoration: underline;
  }
`;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <StyledHeader>
          <NavLink to="/">Add user</NavLink>
          <NavLink to="/edit">Edit user</NavLink>
        </StyledHeader>
        <div className="content">
          <Route exact path="/" component={Add} />
          <Route exact path="/edit" component={Edit} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
