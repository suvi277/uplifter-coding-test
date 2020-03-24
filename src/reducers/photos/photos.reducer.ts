import { actions } from '../../constants/action.types';
import { PhotoCollection, Photo, BaseAction } from '../../types/Photo';

export const initialState = {
    status: 'init'
};
export const photoCollectionReducer = (state: PhotoCollection<Photo> = initialState, action: BaseAction) => {
    switch (action.type) {
        case actions.PHOTOS.GET:
            return { ...state, status: 'loading' };
        case actions.PHOTOS.SUCCESS:
            return {
                ...state,
                photos: action.payload,
                status: 'loaded'
            };
        case actions.PHOTOS.FAILURE:
            return { ...state, error: action.payload, status: 'error' };
    }
    return state;
};
