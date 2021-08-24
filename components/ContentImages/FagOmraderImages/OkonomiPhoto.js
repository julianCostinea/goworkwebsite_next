import React, { useState } from "react";
import Image from "next/image";

import classes from "./FagOmrade.module.css";

const OkonomiImg = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={classes.CardPhoto}>
      <Image
        loading="eager"
        width="400px"
        height="330px"
        className={classes.Laptop}
        style={loaded ? {} : { display: "none" }}
        src="/images/Fagomrader/Okonomi.png"
        alt="Okonomi"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default OkonomiImg;
