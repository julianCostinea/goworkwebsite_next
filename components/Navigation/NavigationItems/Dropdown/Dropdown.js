import React from 'react';

import classes from './Dropdown.module.css';

const Dropdown = (props) => {
    let attachedClasses = [classes.Dropdown, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Dropdown, classes.Open];
    }
    return ( 
        <div id={'dropdown'} onMouseLeave={props.close} className={attachedClasses.join(' ')}>
            <a href="/ledige-stillinger.html">Ledige stillinger</a>
        </div> 
    );
}
 
export default Dropdown;
