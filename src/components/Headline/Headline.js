import React from "react";
import Container from "../Container/Container.js";
import Button from "../Button/Button.js";
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
            <Button to="/schedule/">GET DETAILS</Button>
          </div>
        </Container>
    );
}

export default Headline;