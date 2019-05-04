import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {

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