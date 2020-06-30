import React from 'react';
import PropTypes from 'prop-types';
import styles from './Segment.module.css'

const Segments = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.first}>MOW - HKT</div>
            <div className={styles.first}>В ПУТИ</div>
            <div className={styles.first}>2 ПЕРЕСАДКИ</div>
            <div className={styles.second}>10:45 - 08:00</div>
            <div className={styles.second}>21ч 15м</div>
            <div className={styles.second}>HKG, JNB</div>
        </div>
    );
};

Segments.propTypes = {};

export default Segments;
