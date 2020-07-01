import {
    LOAD_TICKETS,
    REQUEST,
    SUCCESS,
    FAILURE,
    SET_MAIN_FILTER,
    SET_TRANSPLANTS,
    DEL_TRANSPLANT, DEL_OTHER_TRANSPLANTS,
} from '../constants'

const initialState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
    mainFilter: 'cheapest', // 'fastest'
    transplants: [
        {count: Infinity, name: 'Все'},
        {count: 0, name: 'Без пересадок'},
        {count: 1, name: '1 пересадка'},
        {count: 2, name: '2 пересадки'},
        {count: 3, name: '3 пересадки'},
    ],
    selectTransplants: [Infinity]
};

export default (state = initialState, action) => {
    const {type, payload, response, error} = action;

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
        case SET_TRANSPLANTS:
            return {
                ...state,
                selectTransplants: state.selectTransplants.includes(Infinity) ? [payload.count] : [...state.selectTransplants, payload.count]
            };
        case DEL_TRANSPLANT:
            return {
                ...state,
                selectTransplants: state.selectTransplants.filter(item => item !== payload.count)
            };
        case DEL_OTHER_TRANSPLANTS:
            return {
                ...state,
                selectTransplants: [...state.selectTransplants = [Infinity]]
            };
        default:
            return state;
    }
};
