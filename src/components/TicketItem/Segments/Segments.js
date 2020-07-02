import React from 'react';
import PropTypes from 'prop-types';
import styles from './Segment.module.css'
import {connect} from 'react-redux';
import {transplantsToMapSelectors} from '../../../redux/selectors';

const Segments = ({segments, transplants}) => {

    const destinationTime = (date) => {
        return new Date(date).toLocaleTimeString().slice(0, -3);
    };

    const durationTime = (min) => {
        return `${Math.floor(min / 60)}ч ${min % 60}м`;
    };

    const arrivalTime = (date, min) => {
        return new Date(Date.parse(date) + (min * 60000)).toLocaleTimeString().slice(0, -3);
    };

    return segments.map(segment => {
        const {origin, destination, date, stops, duration} = segment;
        return (
            <div className={styles.root} key={duration}>
                <div className={styles.first}>{origin} - {destination}</div>
                <div className={styles.first}>В ПУТИ</div>
                <div className={styles.first}>{transplants[stops.length]}</div>
                <div className={styles.second}>{destinationTime(date)} - {arrivalTime(date, duration)}</div>
                <div className={styles.second}>{durationTime(duration)}</div>
                <div className={styles.second}>{stops.join(', ')}</div>
            </div>
        )
    })
};

Segments.propTypes = {
    segments: PropTypes.arrayOf(PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    transplants: PropTypes.objectOf(PropTypes.string)
};

export default connect((state) => ({
    transplants: transplantsToMapSelectors(state)
}))(Segments);
