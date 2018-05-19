import React from "react";
import Link from "gatsby-link";
import styles from "./SMButton.module.css"

const GoogleMaps = props =>
    <a href={props.to}>
      <img className={styles.buttonSize} src={require('../../../images/GMButton.svg')}/>
    </a>

export default GoogleMaps;