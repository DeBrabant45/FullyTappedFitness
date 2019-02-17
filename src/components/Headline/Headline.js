import React from "react";
import Container from "../Container/Container.js";
import Modal from "../Modal/Modal.js";
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
            <Modal />
          </div>
        </Container>
    );
}

export default Headline;