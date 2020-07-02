import React from 'react';
import PropTypes from 'prop-types';
import styles from './FiltersPanel.module.css'
import FilterPanelItem from './FilterPanelItem';
import {connect} from 'react-redux';
import {transplantsSelectors} from '../../redux/selectors';

const FiltersPanel = ({transplants}) => {
    return (
        <div className={styles.panel}>
            <div className={styles.head}>количество пересадок</div>
            {transplants.map(item => (
                <FilterPanelItem name={item.name} count={item.count} key={item.name}/>
            ))}
        </div>
    );
};

FiltersPanel.propTypes = {
    transplants: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        count: PropTypes.number,
    }))
};

export default connect((state) => ({
    transplants: transplantsSelectors(state)
}))(FiltersPanel);
