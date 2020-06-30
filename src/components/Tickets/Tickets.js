import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tickets.module.css'
import FiltersPanel from '../FiltersPanel';
import MainButtons from '../MainButtons';
import TicketItem from '../TicketItem';

const Tickets = (props) => {
    return (
        <div className={styles.root}>
            <FiltersPanel/>
            <div className={styles.board}>
                <MainButtons/>
                <div className={styles.ticket}>
                    <TicketItem/>
                    <TicketItem/>
                </div>
            </div>
        </div>
    );
};

Tickets.propTypes = {

};

export default Tickets;
