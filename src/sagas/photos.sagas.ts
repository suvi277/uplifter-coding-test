import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getPhotosSuccess, getPhotosFailure } from '../actions/photos/photos.action';
import { API_ROOT, params } from '../constants/endpoint';
import { actions } from '../constants/action.types';

function* getPhotosSaga() {
    try {
        const response = yield call(getData);
        yield put(getPhotosSuccess(response.data.photos.photo));
    } catch (error) {
        yield put(getPhotosFailure(error));
    }
}

export default function* photosSagas() {
    yield takeEvery(actions.PHOTOS.GET, getPhotosSaga);
}

function getData() {
    return axios.get(API_ROOT, { params });
}
