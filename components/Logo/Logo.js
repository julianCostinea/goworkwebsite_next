import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height, cursor: "pointer" }}>
    <Link href="/" onClick={props.clicked} passHref>
      <Image
        loading="eager"
        width="130px"
        height="50px"
        layout="fixed"
        src="/images/NYlogo250px.png"
        alt="Go:Work ApS"
      />
    </Link>
  </div>
);

export default logo;
