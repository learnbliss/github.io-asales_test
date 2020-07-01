import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterPanelItem.module.css'
import {connect} from 'react-redux';
import {selectTransplantsBoolSelector} from '../../../redux/selectors';
import {setTransplants} from '../../../redux/actions';

const FilterPanelItem = ({name, count, selectTransplants, setTransplants}) => {
    return (
        <label className={styles.label}>
            <input
                type="checkbox"
                checked={selectTransplants}
                onChange={() => setTransplants(count)}
            />
            <span className={styles.customInput}/>
            {name}
        </label>
    );
};

FilterPanelItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default connect((state, props) => ({
    selectTransplants: selectTransplantsBoolSelector(state, props)
}), {
    setTransplants
})(FilterPanelItem);
