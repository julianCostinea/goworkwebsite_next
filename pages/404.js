import TwoColumnDiv from '../components/TwoColumnDiv/TwoColumnDiv';

import classes from './Custom404.module.css';

const Custom404 = () => {
  return (
    <div className={classes.Content}>
      <TwoColumnDiv
        buttonLink={"/"}
        buttonText={`Tilbage til forsiden`}
        header={`Siden\n findes \n ikke.`}
      >
        Siden du leder efter eksisterer ikke.
      </TwoColumnDiv>
    </div>
  );
};

export default Custom404;
