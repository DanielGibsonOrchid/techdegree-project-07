import React, { Component } from 'react';

//Used when the URL does not exist
class PageError extends Component {
    render() {
        return (
            <div>
                <h3>Page Not Found - 404</h3>
                <p>The requested page does not exist</p>
            </div>
        );
    }
}

export default PageError;