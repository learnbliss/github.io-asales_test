import {LOAD_TICKETS, REQUEST, SUCCESS, FAILURE, SET_MAIN_FILTER} from '../constants'

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  mainFilter: 'cheapest' // 'fastest'
};

export default (state = initialState, action) => {
  const { type, payload, response, error } = action;

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
    case SET_MAIN_FILTER:
      return {
        ...state,
        mainFilter: payload.filter
      };
    default:
      return state;
  }
};
