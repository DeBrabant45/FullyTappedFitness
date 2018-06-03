import React from "react";
import Container from "../Container/Container.js";
import styles from "./Headline.module.css";
import Button from "../Button/Button.js";

const Headline = (props) => {
    return (
        <Container>
          <div className={styles.HLText}>
            <h1>
                {props.head}
            </h1>
            <p>
                {props.detail1}
                <br/>
                {props.detail2}
            </p>
            {props.children}
          </div>
        </Container>
    );
}

export default Headline;