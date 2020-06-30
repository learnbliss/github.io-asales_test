import {LOAD_TICKETS, REQUEST, SUCCESS, FAILURE} from '../constants'

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_TICKETS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_TICKETS + SUCCESS:
      return {
        ...state,
        entities: response,
        loading: false,
        loaded: true,
      };
    case LOAD_TICKETS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
