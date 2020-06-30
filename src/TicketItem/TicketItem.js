import React from 'react';
import PropTypes from 'prop-types';
import styles from './TicketItem.module.css'

const TicketItem = (props) => {
    return (
        <div className={styles.root}>
            <div>
                <span>price</span>
                <span>logo</span>
            </div>
            <div>

            </div>
        </div>
    );
};

TicketItem.propTypes = {

};

export default TicketItem;
