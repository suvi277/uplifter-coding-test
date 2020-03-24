import React, { useEffect } from 'react';
import Loader from '../loader/Loader';
import PhotoCard from '../photoCard/PhotoCard';
import './PhotoCollection.scss';
import { Photo } from '../../types/Photo';

interface Props {
    status: string;
    photos?: Array<Photo>;
    getPhotos: any;
}

const PhotoCollectionComponent: React.FC<Props> = ({ photos = [], status, getPhotos }) => {
    useEffect(() => {
        getPhotos();
    }, [getPhotos]);

    return (
        <div className="container pt-5">
            {status === 'loading' ? (
                <div className="loader-container">
                    <Loader />
                </div>
            ) : (
                status === 'loaded' && (
                    <div className="d-flex flex-wrap">
                        {photos.map((item, index) => (
                            <PhotoCard key={index} {...item} />
                        ))}
                    </div>
                )
            )}
            {status === 'error' && <div className="error-content">Oops there is an error! Try Again later</div>}
        </div>
    );
};

export default PhotoCollectionComponent;
