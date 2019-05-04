//navigation menu
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (  
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/cats">Cats</NavLink></li>
          <li><NavLink to="/cities">Cities</NavLink></li>
          <li><NavLink to="/water">Water</NavLink></li>
        </ul> 
      </nav>
    );
  }
}

export default Nav;