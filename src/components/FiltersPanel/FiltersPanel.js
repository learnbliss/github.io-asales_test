import React from 'react';
import PropTypes from 'prop-types';
import styles from './FiltersPanel.module.css'
import FilterPanelItem from './FilterPanelItem';

const FiltersPanel = (props) => {
    return (
        <div className={styles.panel}>
            <div className={styles.head}>количество пересадок</div>
            <FilterPanelItem name="Все"/>
            <FilterPanelItem name="Без пересадок"/>
            <FilterPanelItem name="1 пересадка"/>
            <FilterPanelItem name="2 пересадки"/>
            <FilterPanelItem name="3 пересадки"/>
        </div>
    );
};

FiltersPanel.propTypes = {

};

export default FiltersPanel;
