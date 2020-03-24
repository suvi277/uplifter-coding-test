import React, { Fragment } from 'react';
import './_shared/styles/main.scss';
import { PhotoCollectionContainer } from './containers/PhotoCollection';
import PageHeading from './components/pageHeading/PageHeading';

const App: React.FC = () => {
    return (
        <Fragment>
            <PageHeading title="Rendered Markup from Flickr API" />
            <PhotoCollectionContainer />
        </Fragment>
    );
};

export default App;
