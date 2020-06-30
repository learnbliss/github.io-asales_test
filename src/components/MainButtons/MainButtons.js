import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainButtons.module.css'
import Button from './Button';

const MainButtons = (props) => {
    return (
        <div className={styles.mainButtons}>
            <Button
                name="самый дешевый"
                action={() => console.log('click дешевый')}
                borderRadius={{borderRadius: '.5rem 0 0 .5rem'}}
                selected={true}
            />
            <Button
                name="самый быстрый"
                action={() => console.log('click быстрый')}
                borderRadius={{borderRadius: '0 .5rem .5rem 0'}}
                selected={false}
            />
        </div>
    );
};

MainButtons.propTypes = {

};

export default MainButtons;
