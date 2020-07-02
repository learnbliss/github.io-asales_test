import {
    DEL_OTHER_TRANSPLANTS,
    DEL_TRANSPLANT,
    FAILURE,
    LOAD_TICKETS,
    REQUEST,
    SET_MAIN_FILTER,
    SET_TRANSPLANTS,
    SUCCESS
} from './constants';
import {selectTransplantsSelector} from './selectors';

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

export const setTransplants = (count) => {
    return async (dispatch, getState) => {
        const state = getState();
        const transplants = selectTransplantsSelector(state);
        if (transplants.includes(count)) {
            dispatch({type: DEL_TRANSPLANT, payload: {count}});
            if (transplants.length === 1) {
                dispatch({type: DEL_OTHER_TRANSPLANTS});
            }
        } else if (count === Infinity) {
            dispatch({type: DEL_OTHER_TRANSPLANTS})
        } else {
            if (transplants.length === 3) {
                return dispatch({type: DEL_OTHER_TRANSPLANTS});
            }
            dispatch({type: SET_TRANSPLANTS, payload: {count}})
        }
    };
};

// export const setTransplants = (count) => ({
//     type: SET_TRANSPLANTS,
//     payload: {
//         count
//     }
// });
