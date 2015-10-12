import React from 'react';
import { Router, Link, RouteHandler } from 'react-router';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends React.Component{
  render() {
    return(
      <Navbar>
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="app">Clan Lunch</Link>
          </div>
          <Nav right>
            <Link className="navbar-brand" to="edit">Edit Profile</Link>
            <Link className="navbar-brand" to="register">Create Account</Link>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default Navigation;
