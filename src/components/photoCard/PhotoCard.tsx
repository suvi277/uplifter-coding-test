import React from 'react';
import { Photo } from '../../types/Photo';
import './PhotoCard.scss';
import Select from '../select/Select';

const PhotoCard: React.FC<Photo> = ({ title, ownername, description, url_q, owner, tags, id }) => {
    const alltags = tags ? tags.split(' ') : [];

    return (
        <div className="card shadow-lg">
            <img className="card-img-top" src={url_q} alt={title} />
            <div className="card-body">
                <h5 className="card-title">
                    <a
                        href={`https://www.flickr.com/photos/${owner}/${id}`}
                        rel="noopener noreferrer"
                        title={title}
                        target="_blank"
                    >
                        {title}
                    </a>{' '}
                    by{' '}
                    <a
                        href={`https://www.flickr.com/photos/${owner}`}
                        rel="noopener noreferrer"
                        title={ownername}
                        target="_blank"
                    >
                        {ownername}
                    </a>
                </h5>
                {description && (
                    <div
                        className="block-with-text"
                        dangerouslySetInnerHTML={{
                            __html: description._content
                        }}
                    />
                )}
                {alltags.length > 1 && <Select allOptions={alltags} label="Tags" />}
            </div>
        </div>
    );
};

export default PhotoCard;
