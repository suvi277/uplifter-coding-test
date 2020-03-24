import { actions } from '../../constants/action.types';
import { Photo } from '../../types/Photo';
import { getPhotos, getPhotosSuccess, getPhotosFailure } from './photos.action';

describe('Photos Actions', () => {
    const { GET, SUCCESS, FAILURE } = actions.PHOTOS;
    it(`getPhotos should return ${GET} action`, () => {
        expect(getPhotos()).toEqual({
            type: GET
        });
    });

    it(`getPhotosSuccess should return ${SUCCESS} action`, () => {
        const mockData: Array<Photo> = [
            {
                title: 'sample title',
                ownername: 'sample owner name',
                description: {
                    _content: 'some content'
                },
                url_q: 'url/path',
                owner: 'sampleowner',
                id: 'some id',
                tags: 'tag1 tag2'
            }
        ];
        expect(getPhotosSuccess(mockData)).toEqual({
            type: SUCCESS,
            payload: mockData
        });
    });

    it(`getPhotosFailure should return ${FAILURE} action`, () => {
        expect(getPhotosFailure({ errorMessage: [] })).toEqual({
            type: FAILURE,
            payload: {
                errorMessage: []
            }
        });
    });
});
