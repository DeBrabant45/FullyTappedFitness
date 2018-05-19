import React from "react";
import Link from "gatsby-link";
import styles from "./SMButton.module.css"

const Instagram = props =>
    <a href={props.to}>
      <img className={styles.buttonSize} src={require('../../../images/IGButton.svg')}/>
    </a>

export default Instagram;