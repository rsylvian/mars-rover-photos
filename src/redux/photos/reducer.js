import actions from './actions';

const initState = {
  list: [],
  err: null
};

export default function photosReducer(state = { ...initState }, action) {
  switch (action.type) {
    case actions.GET_PHOTOS_SUCCESS: {
      return {
        ...state,
        list: {
          ...state.list,
          [action.rover + '-' + action.earthDate]: action.photos
        }
      };
    }

    default:
      return state;
  }
}
