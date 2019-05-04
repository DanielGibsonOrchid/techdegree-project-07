import React from 'react';

//Simple header text
const Header = ( {title} ) => (
    <header>

        <h1>{ title }</h1>
        <br />

    </header>
);

//Edit heading text here 
Header.defaultProps = {
    title: 'React Gallery App - Project 7'
}

export default Header;