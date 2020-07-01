import React from 'react';
import PropTypes from 'prop-types';
import styles from './TicketItem.module.css'
import Segments from './Segments';

const TicketItem = ({tickets}) => {
    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <span className={styles.price}>{tickets.price} Р</span>
                <span>{tickets.carrier}</span>
                <Segments segments={tickets.segments}/>
            </div>
        </div>
    );
};

TicketItem.propTypes = {
    tickets: PropTypes.shape({
        carrier: PropTypes.string,
        price: PropTypes.number,
        segments: PropTypes.array.isRequired,
    })
};

TicketItem.defaultProps = {
  price: 0,
};

export default TicketItem;
