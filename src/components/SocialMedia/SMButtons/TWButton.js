import React from "react";
import Link from "gatsby-link";
import styles from "./SMButton.module.css"

const Twitter = props =>
    <a href={props.to}>
      <img className={styles.buttonSize} src={require('../../../images/TWButton.svg')}/>
    </a>

export default Twitter;