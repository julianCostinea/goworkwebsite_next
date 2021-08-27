import TwoColumnDiv from '../components/TwoColumnDiv/TwoColumnDiv';

import classes from './errorPage.module.css';

const Custom500 = () => {
  return (
    <div className={classes.Content}>
      <TwoColumnDiv
        buttonLink={"/"}
        buttonText={`Tilbage til forsiden`}
        header={`Server\n error.`}
      >
        Noget gik galt.
      </TwoColumnDiv>
    </div>
  );
};

export default Custom500;
