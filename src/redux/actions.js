import {FAILURE, LOAD_TICKETS, REQUEST, SET_MAIN_FILTER, SUCCESS} from './constants';

export const loadTickets = () => {
    return async (dispatch, getState) => {
        dispatch({type: LOAD_TICKETS + REQUEST});
        try {
            const searchId = await fetch('https://front-test.beta.aviasales.ru/search')
                .then((res) => res.json());
            const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`)
                .then((res) => res.json());
            dispatch({type: LOAD_TICKETS + SUCCESS, response});
        } catch (error) {
            dispatch({type: LOAD_TICKETS + FAILURE, error});
            console.error(error);
            dispatch(loadTickets())
        }
    };
};

export const setMainFilter = (filter) => ({
    type: SET_MAIN_FILTER,
    payload: {
        filter
    },
});
