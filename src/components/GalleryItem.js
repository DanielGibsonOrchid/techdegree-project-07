import React from 'react';

const GalleryItem = props => {
    //Uses 5 items from each array item and then inserts an image with source equal to unique Flickr url
    const { farm, server, id, secret, title } = props.photo;
    return (
        <li>
            <img key={`${id}`} src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${title}`} />
        </li>
    )
};

export default GalleryItem;