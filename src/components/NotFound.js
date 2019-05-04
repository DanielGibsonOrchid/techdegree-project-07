import React, { Component } from 'react';

class NotFound extends Component {
    render() {
      return (  
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
        </li>
      );
    }
  }
  
  export default NotFound;