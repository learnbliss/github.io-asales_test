import React from 'react';
import Tickets from '../Tickets';
import Logo from '../Logo';
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.container}>
            <Logo/>
            <Tickets/>
        </div>
    );
}

export default App;
