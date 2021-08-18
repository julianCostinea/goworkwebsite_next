import { Fragment } from "react"
import Head from 'next/head'

import classes from './ledige-stillinger.module.css';

const ledigeStillinger = () => (
    // <!--HER STARTER SCRIPT / SCRIPT BEGINS HERE v1--> 
    <Fragment>
        <Head>
            <script src="https://hr-skyen.dk/hr/frame-api/hr.js" type="text/javascript"></script>
            <div id="hrskyen">
                <noscript>This page requires javascript<br />
                    <a href="https://hr-skyen.dk/list-jobs/">Visit our job page</a>
                </noscript>
            </div>
            <script src="https://hr-skyen.dk/hr/frame-api/customers/goworkaps.js" type="text/javascript"></script>
        </Head>
    </Fragment>
    // <!--HER SLUTTER SCRIPT / SCRIPT ENDS HERE-->
);

export default ledigeStillinger;