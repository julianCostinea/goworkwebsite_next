import React, {useState} from 'react';
import Image from 'next/image'

import classes from './ContentImage.module.css'

const VirksomhederImage = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.ImageDiv2}>
        <Image
            loading="eager"
            width="400px" height="400px"
            style={loaded ? {} : { display: 'none' }} 
            src='/images/jobsoegende/jobsoegende-team_v2.svg' alt="Virksomheder"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}

export default VirksomhederImage;