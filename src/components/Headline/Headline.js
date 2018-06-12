import React from "react";
import Container from "../Container/Container.js";
import styles from "./Headline.module.css";

const Headline = (props) => {
    return (
        <Container>
          <div className={styles.HLText}>
            <h1>
                {props.head}
            </h1>
            <p>
                {props.detail1}
                {props.detail2}
            </p>
            {props.children}
          </div>
        </Container>
    );
}

export default Headline;