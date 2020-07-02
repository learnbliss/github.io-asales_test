import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainButtons.module.css'
import Button from './Button';
import {connect} from 'react-redux';
import {setMainFilter} from '../../redux/actions';
import {mainFilterSelector} from '../../redux/selectors';

const MainButtons = ({setMainFilter, filter}) => {
    return (
        <div className={styles.mainButtons}>
            <Button
                name="самый дешевый"
                action={() => setMainFilter('cheapest')}
                borderRadius={{borderRadius: '.5rem 0 0 .5rem'}}
                selected={filter === 'cheapest'}
            />
            <Button
                name="самый быстрый"
                action={() => setMainFilter('fastest')}
                borderRadius={{borderRadius: '0 .5rem .5rem 0'}}
                selected={filter === 'fastest'}
            />
        </div>
    );
};

MainButtons.propTypes = {
    setMainFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

export default connect((state) => ({
    filter: mainFilterSelector(state)
}), {
    setMainFilter
})(MainButtons);
