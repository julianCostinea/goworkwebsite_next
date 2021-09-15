import React, {useContext} from "react";
import BackdropContext from "../../store/backdrop-context";
import Link from "next/link";
import Image from "next/image";

import classes from "./Logo.module.css";

const Logo = (props) => {
  const backdropCtx = useContext(BackdropContext);

  return(
  <div className={classes.Logo} style={{ height: props.height, cursor: "pointer" }}>
    <Link href="/" passHref>
      <a onClick={backdropCtx.hideBackdrop}>
        <Image
          loading="eager"
          quality="100"
          width="130px"
          height="60px"
          layout="fixed"
          src="/images/logo.jpg"
          alt="GoWork ApS"
        />
      </a>
    </Link>
  </div>
)};

export default Logo;
