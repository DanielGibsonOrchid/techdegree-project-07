import React from 'react';

const GalleryItem = props => {
    const { farm, server, id, secret, title } = props.photo;
    return (
        <li>
            <img key={`${id}`} src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${title}`} />
        </li>
    )
};

export default GalleryItem;