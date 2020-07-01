import {createSelector} from 'reselect';
import {getDuration} from './utils';

const allTicketsSelector = (state) => state.tickets.entities.tickets;
// const ticketsWithoutStopsSelector = (state) =>
// const ticketsWithOneStopSelector = (state) =>
// const ticketsWithTwoStopsSelector = (state) =>
// const ticketsWithThreeStopsSelector = (state) =>

export const mainFilterSelector = (state) => state.tickets.mainFilter;

export const ticketsSelector = createSelector(
    allTicketsSelector,
    mainFilterSelector,
    (tickets, filter) => {
        if (filter === 'cheapest') {
            return tickets?.slice().sort((a, b) => a.price - b.price).slice(0, 5)
        }
        return tickets?.slice().sort((a, b) => {
            return getDuration(a.segments) - getDuration(b.segments);
        }).slice(0, 5);
    }
);

export const ticketsCheapestSelector = createSelector(
    allTicketsSelector,
    mainFilterSelector,
    (tickets, filter) => {
        return tickets?.slice().sort((a, b) => a.price - b.price).slice(0, 5)
    }
);

export const ticketsFastestSelector = createSelector(
    allTicketsSelector,
    mainFilterSelector,
    (tickets, filter) => {
        return tickets?.slice().sort((a, b) => {
            return getDuration(a.segments) - getDuration(b.segments);
        }).slice(0, 5);
    }
);

export const transplantsSelectors = (state) => state.tickets.transplants;
export const selectTransplantsSelector = (state) => state.tickets.selectTransplants;

export const transplantsToMapSelectors = createSelector(
    transplantsSelectors,
    (transplants) => (
        transplants.reduce((acc, item) => {
            return {...acc, [item.count]: item.name}
        }, {})
    )
);

export const selectTransplantsBoolSelector = createSelector(
    selectTransplantsSelector,
    (_, {count}) => count,
    (selectTransplants, count) => {
        return !!selectTransplants.includes(count)
    }
);
