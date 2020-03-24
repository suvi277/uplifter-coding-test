import { actions } from '../../constants/action.types';
import { PhotoCollection, Photo, BaseAction } from '../../types/Photo';
import { photoCollectionReducer, initialState } from './photos.reducer';

describe('app/reducers/robot', () => {
    let state: PhotoCollection<Photo> = initialState;
    const { GET, SUCCESS, FAILURE } = actions.PHOTOS;

    describe(`${GET} action`, () => {
        const expectedState = { status: 'loading' };

        test('should set the status to loading', () => {
            expect(
                photoCollectionReducer(state, {
                    type: GET,
                }),
            ).toEqual(expectedState);
        });
    });

    describe(`${SUCCESS} action`, () => {
        const mockData: Array<Photo> = [
            {
                title: 'sample title',
                ownername: 'sample owner name',
                description: {
                    _content: 'some content',
                },
                url_q: 'url/path',
                owner: 'sampleowner',
                id: 'some id',
                tags: 'tag1 tag2',
            },
        ];

        const expectedState = { status: 'loaded', photos: mockData };
        let reducerWithSuccessType: any;

        beforeEach(() => {
            reducerWithSuccessType = photoCollectionReducer(state, {
                type: SUCCESS,
                payload: mockData,
            });
        });

        test('should set the status to error', () => {
            expect(reducerWithSuccessType.status).toEqual(expectedState.status);
        });

        test('should set the photos to mockData passed with reducer method', () => {
            expect(reducerWithSuccessType.photos).toEqual(expectedState.photos);
        });
    });

    describe(`${FAILURE} action`, () => {
        const mockError = { error: 'some message' };
        const expectedState = { status: 'error', error: mockError };
        let reducerWithFailureType: any;

        beforeEach(() => {
            reducerWithFailureType = photoCollectionReducer(state, {
                type: FAILURE,
                payload: mockError,
            });
        });

        test('should set the status to error', () => {
            expect(reducerWithFailureType.status).toEqual(expectedState.status);
        });

        test('should set the error to mockError passed with reducer method', () => {
            expect(reducerWithFailureType.error).toEqual(expectedState.error);
        });
    });
});
