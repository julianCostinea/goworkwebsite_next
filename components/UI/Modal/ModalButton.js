import React from 'react';
import Link from 'next/link';

import classes from './Modal.module.css';

const Button = (props) => {
    return (
        <Link href={props.link}>
            <button onClick={props.modalClosed} className={classes.ModalButton}>
                {props.buttonText}
            </button>
        </Link>
    )
};

export default Button;