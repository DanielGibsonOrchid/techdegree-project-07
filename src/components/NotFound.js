import React, { Component } from 'react';

//Used for search results that return 0 item array
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
