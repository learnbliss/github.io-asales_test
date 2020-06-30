import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterPanelItem.module.css'

const FilterPanelItem = ({name}) => {
    return (
        <label className={styles.label}>
            <input type="checkbox"/>
            <span className={styles.customInput}/>
            {name}
        </label>
    );
};

FilterPanelItem.propTypes = {};

export default FilterPanelItem;
