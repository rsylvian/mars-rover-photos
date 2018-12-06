import { MarsPhotosAPI } from '../../services/MarsPhotosAPI/';

const photosActions = {
  GET_PHOTOS_SUCCESS: 'GET_PHOTOS_SUCCESS',
  GET_PHOTOS_FAIL: 'GET_PHOTOS_FAIL',

  getPhotosByRover: (rover, earthDate) => {
    return dispatch => {
      MarsPhotosAPI.getPhotosByRover(rover, earthDate)
        .then(data => {
          if (data && data.photos) {
            dispatch({
              type: photosActions.GET_PHOTOS_SUCCESS,
              photos: data.photos,
              rover: rover,
              earthDate: earthDate
            });
          }
        })
        .catch(err => {
          dispatch({
            type: photosActions.GET_PHOTOS_FAIL,
            err: err
          });
        });
    };
  }
};

export default photosActions;
