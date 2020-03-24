import { combineReducers } from 'redux';
import { PhotoCollection, Photo } from '../types/Photo';
import { photoCollectionReducer } from './photos/photos.reducer';

export interface State {
    photoCollection: PhotoCollection<Photo>;
}

export const rootReducers = combineReducers<State>({
    photoCollection: photoCollectionReducer
});
