import React from 'react';

import classes from './ClientVideoDiv.module.css';

const ClientVideoDiv = (props) => {
    let attachedClasses = [classes.Container];
    let headerClasses = [classes.Header]
    if (props.whiteDiv) {
        attachedClasses = [classes.Container, classes.White];
    }
    if (props.whiteDiv) {
        headerClasses = [classes.Header, classes.White];
    }
    return (
        <div>

            <div className={attachedClasses.join(' ')}>
                <div className={classes.TextDiv}>
                    <div className={classes.Paragraph}>
                        {props.children}
                    </div>
                </div>
                <div className={classes.VideoDiv}>
                    <iframe src="https://www.youtube-nocookie.com/embed/wAasC_gnYqU?rel=0"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen ></iframe>
                </div>
            </div>
        </div>
    )
};

export default ClientVideoDiv;