import React from 'react';

//Simple header text
const Header = ( {title, subTitle} ) => (
    <header>

        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <br />

    </header>
);

//Edit heading text here 
Header.defaultProps = {
    title: 'React Gallery App - Project 7',
    subTitle: 'Search for images on Flickr or use to menu below'
}

export default Header;