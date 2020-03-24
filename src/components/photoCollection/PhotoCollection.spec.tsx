import React from 'react';
import { shallow, mount } from 'enzyme';
import PhotoCollection from './PhotoCollection';
import Loader from '../loader/Loader';
import PhotoCard from '../photoCard/PhotoCard';

describe('<PhotoCollection /> with default props', () => {
    const defaultProps = {
        status: 'loading',
        getPhotos: jest.fn(),
    };
    const wrapper = shallow(<PhotoCollection {...defaultProps} />);
    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Loader as status is loading', () => {
        expect(wrapper.exists(Loader)).toBeTruthy();
    });

    describe('useEfect', () => {
        const Comp = () => {
            PhotoCollection({ ...defaultProps });
            return <div />;
        };

        const wrapper = mount(<Comp />);

        it('should call the `getPhotos` when mounted ', () => {
            expect(defaultProps.getPhotos).toHaveBeenCalled();
        });
    });

    describe('<PhotoCollection /> with photos props', () => {
        const eachPhoto = {
            title: 'sample title',
            ownername: 'sample owner name',
            description: {
                _content: 'some content',
            },
            url_q: 'url/path',
            owner: 'sampleowner',
            id: 'some id',
            tags: '',
        };
        const defaultProps = {
            status: 'loaded',
            photos: [eachPhoto],
            getPhotos: jest.fn(),
        };
        const wrapper = shallow(<PhotoCollection {...defaultProps} />);

        it('should render the `PhotoCard` as status is loaded with photos ', () => {
            expect(wrapper.exists(PhotoCard)).toBeTruthy();
        });
        it('should render one `PhotoCard` as length of photos array is 1 ', () => {
            expect(wrapper.find('PhotoCard').length).toBe(1);
        });
    });

    describe('<PhotoCollection /> with error props', () => {
        const defaultProps = {
            status: 'error',
            getPhotos: jest.fn(),
        };
        const wrapper = shallow(<PhotoCollection {...defaultProps} />);
        it('should render Loader as status is loading', () => {
            expect(wrapper.find('.error-content').text()).toEqual('Oops there is an error! Try Again later');
        });
    });
});
