import actions from './actions';

const initState = {
  list: [],
  err: null
};

export default function photosReducer(state = { ...initState }, action) {
  switch (action.type) {
    case actions.GET_PHOTOS_SUCCESS: {
      // this reducer generates one unique field for a roverType/date pair
      // example:
      //
      // list: {
      //   curiosity-2018-12-01: [{}, {}, {}, ...],
      //   curiosity-2018-12-05: [{}, {}, {}, ...],
      // }
      //
      // This allows a significant boost in performances when retriving data

      return {
        ...state,
        err: null,
        list: {
          ...state.list,
          [action.rover + '-' + action.earthDate]: action.photos
        }
      };
    }

    case actions.GET_PHOTOS_FAIL: {
      return {
        ...state,
        err: action.err
      };
    }

    default:
      return state;
  }
}
