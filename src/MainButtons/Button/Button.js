import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'
import cn from 'classnames';

const Button = ({name, action, selected, borderRadius}) => {
    return (
        <button
            className={cn(styles.button, { [styles.selected]: selected })}
            style={borderRadius}
            onClick={action}
        >{name}</button>
    );
};

Button.propTypes = {

};

export default Button;
