import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css'
import logo from '../img/logo.png'

const Logo = (props) => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt={'logo'}/>
        </div>
    );
};

Logo.propTypes = {

};

export default Logo;
