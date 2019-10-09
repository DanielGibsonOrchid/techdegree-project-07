import React from 'react';

//Simple header text
const Header = ( {title, subTitle} ) => (
    <header>

        <h1>{ title }</h1>
        <br />
        <p>{ subTitle }</p>
        <br />

    </header>
);

//Edit heading text here 
Header.defaultProps = {
    title: 'React Gallery App',
    subTitle: 'Search for images using the Flickr API or try out the three example searches below'
}

export default Header;