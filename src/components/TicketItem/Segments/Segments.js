import React from 'react';
import PropTypes from 'prop-types';
import styles from './Segment.module.css'

const Segments = ({segments}) => {
    console.log('segments: ', segments);

    const numTransfers = (arr) => {
        if (arr.length > 1) {
            return `${arr.length} пересадки`
        }
        return `${arr.length} пересадка`
    };

    return segments.map(segment => {
        const {origin, destination, date, stops, duration} = segment;
        return (
            <div className={styles.root} key={duration}>
                <div className={styles.first}>{origin} - {destination}</div>
                <div className={styles.first}>В ПУТИ</div>
                <div className={styles.first}>{numTransfers(stops)}</div>
                <div className={styles.second}>10:45 - 08:00</div>
                <div className={styles.second}>21ч 15м</div>
                <div className={styles.second}>{stops.join(', ')}</div>
            </div>
        )
    })
};

Segments.propTypes = {};

export default Segments;

// <div className={styles.root}>
//                     <div className={styles.first}>MOW - HKT</div>
//                     <div className={styles.first}>В ПУТИ</div>
//                     <div className={styles.first}>2 ПЕРЕСАДКИ</div>
//                     <div className={styles.second}>10:45 - 08:00</div>
//                     <div className={styles.second}>21ч 15м</div>
//                     <div className={styles.second}>HKG, JNB</div>
//                 </div>
