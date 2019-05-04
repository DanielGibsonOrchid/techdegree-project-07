import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {

    //Map loops through each item in the API JSON array then passes each one to GalleryItem component
    let photos;
    photos = props.photos.map(photo =>
        <GalleryItem photo={photo} key={photo.id} />
    );

    return (
        <ul>
            {photos}
        </ul>
    );
}

export default Gallery;