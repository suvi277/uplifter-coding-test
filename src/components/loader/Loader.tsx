import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.scss';

const Loader: React.FC<{}> = () => (
    <div className="loader">
        <Spinner animation="border" variant="warning" />
    </div>
);

export default Loader;
