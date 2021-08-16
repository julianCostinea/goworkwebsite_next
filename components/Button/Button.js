import React from 'react';
import Link from 'next/link';

import classes from './Button.module.css';

const Button = (props) => {
    let buttonClasses = [classes.Button]
    if (props.whiteButton) {
        buttonClasses = [classes.Button, classes.whiteButton];
    }

    return (
        <Link href={props.buttonLink}>
            <a>
                <button
                    className={buttonClasses.join(' ')}>
                    {props.buttonText}
                </button>
            </a>
        </Link>
    )
};

export default Button;