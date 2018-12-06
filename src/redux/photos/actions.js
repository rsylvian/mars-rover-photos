import { MarsPhotosAPI } from '../../services/MarsPhotosAPI/';

const photosActions = {
  GET_ONE_PHOTO_SUCCESS: 'GET_ONE_PHOTO_SUCCESS',
  GET_PHOTOS_SUCCESS: 'GET_PHOTOS_SUCCESS',

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
          // TODO
          console.log(err);
        });
    };
  }
};

export default photosActions;
