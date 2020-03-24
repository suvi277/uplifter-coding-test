import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { PhotoCollectionContainer } from './containers/PhotoCollection';

describe('Home Component', () => {
    const wrapper = shallow(<App />);

    it('should exist PageHeading Component', () => {
        expect(wrapper.find('PageHeading')).toHaveLength(1);
    });

    it('should exist TimeSeries Component', () => {
        expect(wrapper.exists(PhotoCollectionContainer)).toBeTruthy();
    });
});
