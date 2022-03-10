import React from 'react';

import classes from './TwoColumnDiv.module.css';
import Button from '../Button/Button';
import Link from 'next/link';

const TwoColumnDiv = (props) => {
    let hopOmBordLink;
    let button1 = null;
    if (props.buttonText) {
        button1 = <Button 
            buttonText = {props.buttonText}
            buttonLink = {props.buttonLink}
            />;
    }
    let button2 = null;
    if (props.button2Text) {
        button2 = <Button 
            whiteButton 
            buttonText = {props.button2Text}
            buttonLink = {props.button2Link}
            />;
    }

    const formattedHeader = props.header.split('\n').map((str, index) => <h2 className={classes.Header__h2} key={index}>{str}</h2>);
    if (props.underText) {
        if (props.englishVersion) {
            hopOmBordLink = <Link href='/en/vikar/hop-ombord'><a>{props.underText}</a></Link>
        } else{
            hopOmBordLink = <Link href='/vikar/hop-ombord'><a>{props.underText}</a></Link>
        }
    }
    return(
    <div className={`${classes.Container} ${props.ReverseContainer ? classes.ReverseContainer : null} ${props.smallIconReverse ? classes.smallIconReverse : null} ${props.lightBlueDiv ? classes.lightBlueDiv : null}`}>
        <div className={classes.TextDiv}>
            <div className={classes.Header}>
                {formattedHeader}
            </div>
            <div className={classes.Paragraph}>
                <p className={classes.Paragraph__p}>{props.children}</p>
            </div> 
                {button1}
                {button2}
            <br />
            {hopOmBordLink}
        </div>
        <div className={classes.ImageDiv}>
            {props.imageDiv}
        </div>
    </div>
    )
};

export default TwoColumnDiv;