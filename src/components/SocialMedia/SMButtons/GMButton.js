import React from "react";
import styles from "./SMButton.module.css"

const GoogleMaps = props =>
    <a href={props.to}>
      <img className={styles.buttonSize} src={require('../../../images/GMButton.svg')}/>
    </a>

export default GoogleMaps;