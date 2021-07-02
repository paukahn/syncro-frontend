import React from 'react';
import Styles from './Styles';

export const App = () => {
    return (
        <div style={Styles.styleApp}>
            <div style={Styles.styleSocials}></div>
            <div style={Styles.styleList}>
                <div style={Styles.styleSearchBox}></div>
            </div>
            <div style={Styles.styleChat}></div>
        </div>
    );
};