import React, { Component } from "react";
import Head from 'next/head';

import FacebookIcon from "../../components/Icons/facebookIcon";
import LinkedInIcon from "../../components/Icons/linkedInIcon";
import KontaktForm from "../../components/KontaktForm/KontaktForm";

import classes from "./Kontakt.module.css";
import TwoColumnKontaktDiv from "../../components/TwoColumnKontaktDiv/TwoColumnKontaktDiv";

class Kontakt extends Component {
  state = {};
  render() {
    const kontaktData = (
      <div className={classes.kontaktData}>
        <h2>Kontakt os </h2> <br />
        Vi glæder os til at høre fra dig.
        <br />
        <br />
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>: 66 10 65 00
        </div>
        <br />
        <br />
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>: job@go-work.dk
        </div>
        <br />
        <br />
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          : Fjordsgade 11, 1. Sal, <br />
          5000 Odense C.
          <br /><br />
          CVR.: 34704813
        </div>
        <br />
        <br />
        <strong>Følg os på de sociale medier</strong>
        <br />
        <br />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
    );
    const kontaktForm = (
      <div className={classes.kontaktFormDiv}>
        <div className ={classes.HeaderContainer}>
          <h2>Skriv til os</h2>
          <p>
            Vi sidder klar til at hjælpe dig godt i gang. Hvis du er jobsøger, så beder vi dig sende os en ansøgning på et aktuelt jobopslag.
          </p>
        </div>

        <KontaktForm noHeader />
      </div>
    );
    return (
      <React.Fragment>
        <Head>
          <title>Kontakt</title>
          <meta name="description" content="Kontakt SIDE" />
        </Head>
        <div className={classes.Content}>
          <TwoColumnKontaktDiv leftDiv={kontaktForm} rightDiv={kontaktData} />
          <div className={classes.GoogleMaps}>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.735623208934!2d10.37225991606297!3d55.3975183268043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdffacd3b5447%3A0xc121de3dbe8e10ab!2sFjordsgade+11%2C+5000+Odense!5e0!3m2!1sda!2sdk!4v1533647673702"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Kontakt;
