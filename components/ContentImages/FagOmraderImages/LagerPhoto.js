import React, { useState } from "react";
import Image from "next/image";

import classes from "./FagOmrade.module.css";

const LagerImg = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={classes.CardPhoto}>
      <Image
        loading="eager"
        width="380px"
        height="310px"
        className={classes.Laptop}
        style={loaded ? {} : { display: "none" }}
        src="/images/virksomheder/fagomrader/wheels.svg"
        alt="Lager"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default LagerImg;
