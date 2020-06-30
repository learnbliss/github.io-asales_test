import React from 'react';
import PropTypes from 'prop-types';
import styles from './TicketItem.module.css'
import Segments from './Segments';

const TicketItem = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <span className={styles.price}>13 400 Р</span>
                <span>logo</span>
                <Segments/>
                <Segments/>
            </div>
        </div>
    );
};

TicketItem.propTypes = {

};

export default TicketItem;
