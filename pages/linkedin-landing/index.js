import React, { Component } from 'react';
import Head from 'next/head';

import classes from './LinkedInLanding.module.css';

import KontaktModalButton from '../../components/Button/KontaktModalButton';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import UddannelserImage from '../../components/ContentImages/UddannelserImage';
import KontaktModal from '../../components/UI/Modal/KontaktModal';
import LinkedInLandingImage from "../../components/ContentImages/LinkedInLanding/LinkedInLanding1";
import UddanelserImage from '../../components/ContentImages/UddanelserImage';
import UddanelserImage3 from '../../components/ContentImages/UddanelserImage3';
import TwoColumnRoundedDiv from '../../components/TwoColumnRoundedDiv/TwoColumnRoundedDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

class LinkedInLanding extends Component {
    state = {
        showModal: false,
    }
    showModal = () => {
        this.setState({ showModal: true });
    }
    closeModal = () => {
        this.setState({ showModal: false });
    }
    render() {
        const pageTitle = "LinkedIn Landing";
        return (
            <div>
                <Head>
                    <title>{pageTitle}</title>
                </Head>
                <KontaktModal show={this.state.showModal} modalClosed={this.closeModal} />
                <div className={classes.Content}>
                    <TwoColumnDiv
                        imageDiv={<LinkedInLandingImage />}
                        header={'Gode råd til dig der bruger vikarer på dit lager'}>
                        GoWork har igennem de seneste 10 år leveret vikarer til lager-området og har derfor et indgående kendskab til succeskriterierene, der skaber et udbytterigt samarbejde <br />
                        mellem brugervirksomhed, vikar og vikarbureau.<br /> <br />
                        I det følgende vil vi præsentere nogle punkter, som du kan følge eller blive inspireret af, for at finde <br />
                        den bedst mulige samarbejdspartner til at finde vikarer til dit lager.
                    </TwoColumnDiv>
                    <TwoColumnDiv
                        imageDiv={<UddannelserImage />}
                        header={'Ved valget af vikarbureau:'}>
                        <strong>Undersøg om bureauet er stærke på lagerområdet</strong>
                        <ul>
                            <li>Spørg om de har andre kunder inden for feltet</li>
                            <li>Få evt. referencer på en kunde de arbejder med</li>
                        </ul>
                        <em>Ved at spørge ind til ovenstående sikrer du først og fremmest, at de konsulenter, du skal arbejde sammen med, har forståelse for dit fagområde.
                            Derudover sikrer du også at bureauet har erfaring med at tiltrække vikarer med de kompetencer du skal bruge.</em> <br /><br />
                        <strong>Undersøg bureauets kundetilfredshed </strong>
                        <ul>
                            <li>Deres evne til at finde det rette match</li>
                            <li>Deres besættelsesgrad</li>
                        </ul>
                        <em>NPS Scoren kan sige noget om bureauets evne til at finde det rette match og besættelsesgraden for det pågældende bureau.</em><br /><br />
                        <strong>Derudover er det vigtigt at undersøge om bureauet følger vikarloven og den på brugervirksomhedernes gældende overenskomst/satser.</strong><br /><br />
                        <em>På den måde er du sikker på ikke at ende i en situation der er på kanten med gældende lovgivning.</em>
                    </TwoColumnDiv>
                    <OneColumnDiv
                        darkBlueDiv
                        header={'Vil du fortælle os lidt om dit personalebehov?'}
                    >
                        <KontaktModalButton whiteButton openKontakt={this.showModal} />
                    </OneColumnDiv>
                    <TwoColumnRoundedDiv
                        imageDiv={<UddanelserImage />}
                        header={'Når du bestiller:'}>
                        <strong>Beskriv opgaven grundigt.</strong> <br />
                        <em>På den måde minimerer du chancen for at få en vikar ud til dine pågældende opgaver, som ikke matcher dine behov.</em><br /><br />
                        <strong>Skriv evt. de succeskriterier du ønsker opfyldt.</strong> <br />
                        <em>På den måde forventningsafstemmer du med vikarbureauet og dermed kan der rekrutteres på baggrund af dine forventninger til et succesfuldt vikariat.</em><br /><br />
                        <strong>Afstem arbejdstider, kontaktpersoner, brug for sikkerhedssko, overenskomst/lønforhold, samt varighed mv.</strong> <br />
                        <em>På den måde sikrer du at vikaren er mest muligt oplyst om opgaverne og dermed kan </em>
                    </TwoColumnRoundedDiv>
                    <OneColumnDiv
                        header="Anim consectetur irure tempor deserunt dolore pariatur nostrud dolor aute incididunt ipsum voluptate."
                    >
                    </OneColumnDiv>
                    <TwoColumnDiv
                        imageDiv={<UddannelserImage />}
                        header={'Når vikaren møder:'}>
                        <strong>Tag godt imod vikaren</strong>
                        <em>Så føler vikaren sig fra første sekund som en del af teamet/arbejdspladsen og dermed er chancerne for et succesfuldt samarbejde væsentligt størrre.</em> <br /><br />
                        <strong>Invester den nødvendige tid til oplæring</strong>
                        <em>På den måde sikrer du hurtigere effektivitet og mindsker chancen for fejl i løbet af arbejdsdagen.</em><br /><br />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Det optimale samarbejde'}
                    >
                        Med udgangspunkt i de ovenstående punkter kan du sørge for, at det bureau, du vælger, er kompetente til netop den opgave, du vil have løst. <br />
                        De vikarer, der hyres ind, er udvalgt på baggrund af en detaljeret indsigt i opgaven således, at du kan få opgaven løst samt få en medarbejder, <br />
                        der føler sig værdsat. Derudover kan et fortsat godt samarbejde skabes med åben dialog om opgaven og en fælles fremtid både med bureauet og vikaren.
                    </OneColumnDiv>
                    <TwoColumnRoundedDiv
                        ReverseContainer
                        imageDiv={<UddanelserImage3 />}
                        header={'Til det videre samarbejde:'}>
                        <strong>Giv feedback til vikarbureauet, om både justeringer og succesoplevelser</strong>
                        <br />
                        <em>Så Vikarbureauet fremadrettet kan rekruttere endnu mere effektivt, og forsat kan finde god og kvalificeret arbejdskraft til jer.</em> <br /><br />
                        <strong>Giv feedback til vikaren, om både justeringer og succesoplevelser</strong>
                        <br />
                        <em>Så vikaren kan forbedre eller forsætte sin gode arbejdsindsats – både hvis i skal bruge vikaren igen men også til vikarens fremadrettede udvikling.</em><br /><br />
                        <strong>Overvej vikaren som en fast ansat</strong><br />
                        <em>Er der god kemi, og kan i finde en fast plads til vikaren i jeres virksomhed, så overvej et Try &amp; Hire forløb med vikaren, så i kan sikre jer en god medarbejder til jeres virksomhed.</em>
                    </TwoColumnRoundedDiv>
                    <OneColumnDiv
                        header={'Interesseret? Skriv til os'}
                    >
                        <KontaktForm noHeader />
                    </OneColumnDiv>
                </div>
            </div>
        );
    }
}

export default LinkedInLanding;