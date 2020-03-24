import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('<Select /> with default props', () => {
    const defaultProps = {
        allOptions: ['a', 'b'],
        label: 'Tags'
    };
    const wrapper = shallow(<Select {...defaultProps} />);
    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should insert the prop values to correct places ', () => {
        expect(wrapper.find('.input-group-text').text()).toEqual(defaultProps.label);
    });
    it('should render two option tag as allOptions prop length is two ', () => {
        expect(wrapper.find('option').length).toBe(2);
    });
    it('should insert the option values to correct places ', () => {
        expect(wrapper.find('option').at(0).text()).toBe('a');
        expect(wrapper.find('option').at(1).text()).toBe('b');
    });
});
