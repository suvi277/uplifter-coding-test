import { combineReducers } from 'redux';
import { photoCollectionReducer } from './photos/photos.reducer';
import { PhotoCollection, Photo } from '../types/Photo';

export interface State {
    photoCollection: PhotoCollection<Photo>;
}

export const rootReducers = combineReducers<State>({
    photoCollection: photoCollectionReducer,
});
