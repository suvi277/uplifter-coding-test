import { connect } from 'react-redux';
import { State } from '../reducers';
import { getPhotos } from '../actions/photos/photos.action';
import PhotoCollectionComponent from '../components/photoCollection/PhotoCollection';

const mapStateToProps = (state: State) => ({ ...state.photoCollection });

const mapDispatchToProps = (dispatch: any) => ({ getPhotos: () => dispatch(getPhotos()) });

export const PhotoCollectionContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoCollectionComponent);
