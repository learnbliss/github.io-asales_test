import {createSelector} from 'reselect';

const allTicketsSelector = (state) => state.tickets.entities.tickets;

export const ticketsSelector = createSelector(
    allTicketsSelector,
    (tickets) => (
        tickets?.slice(0, 5)
    )
);
