import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from 'react-bootstrap';
import Loader from './Loader';

describe('Loader Component', () => {
    const wrapper = shallow(<Loader />);

    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should exist loader div', () => {
        expect(wrapper.find('.loader')).toHaveLength(1);
    });

    it('should exist Spinner Component', () => {
        expect(wrapper.exists(Spinner)).toBeTruthy();
    });
});
