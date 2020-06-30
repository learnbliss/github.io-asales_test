import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Tickets.module.css'
import FiltersPanel from '../FiltersPanel';
import MainButtons from '../MainButtons';
import TicketItem from '../TicketItem';
import {connect} from 'react-redux';
import {loadTickets} from '../../redux/actions';
import {ticketsSelector} from '../../redux/selectors';

const Tickets = ({loadTickets, tickets,}) => {
    useEffect(() => {
        loadTickets();
    }, []);
    return (
        <div className={styles.root}>
            <FiltersPanel/>
            <div className={styles.board}>
                <MainButtons/>
                <div className={styles.ticket}>
                    {tickets ? tickets.map(item => (
                        <TicketItem tickets={item} key={item.price}/>
                    )): <div>Loading...</div>}
                </div>
            </div>
        </div>
    );
};

Tickets.propTypes = {

};

export default connect((state) => ({
    tickets: ticketsSelector(state),
}), {loadTickets})(Tickets);
