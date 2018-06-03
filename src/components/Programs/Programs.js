import React from "react";
import Link from "gatsby-link";
import Container from "../Container/Container.js";
import Button from "../Button/Button.js";
import styles from "../Programs/Programs.module.css";

const Programs = (props) => {
    return(
        <div className={styles.secc}>
        <Container>
             <div className={styles.sectionc}>
                    <h2>WELCOME!</h2>
                    <h1>Choose the program</h1>
                    <p>
                        Be part of our premier
                        <span className={styles.colorchange}> Performance </span>
                        community
                    </p>
                </div>
                <div className={styles.contentservices}>
                    <div className={styles.small}>
                        <img src={require('../../images/Preformace.svg')}/>
                        <h3>Performance</h3>
                        <Button to="/classes/">DETAILS</Button>
                    </div>
                    <div className={styles.small}>
                        <img src={require('../../images/PersonalTraining.svg')} />
                        <h3>Personal Training</h3>
                        <Button to="/classes/">DETAILS</Button>
                    </div>
                    <div className={styles.small}>
                        <img src={require('../../images/BootCamp.svg')} />
                        <h3>Boot Camp</h3>
                        <Button to="/classes/">DETAILS</Button>
                    </div>
                </div>
        </Container>
        </div>
    );
}

export default Programs;