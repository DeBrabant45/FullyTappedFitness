import React from "react";
import styles from "./SMButton.module.css"

const Facebook = props =>
    <a href={props.to}>
      <img className={styles.buttonSize} src={require('../../../images/FBbutton.svg')}/>
    </a>

export default Facebook;