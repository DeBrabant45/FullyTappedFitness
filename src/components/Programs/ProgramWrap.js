import React from "react";
import Container from "../Container/Container.js";
import Programs from "./ProgramInfo/Programs.js";
import styles from "../Programs/ProgramWrap.module.css";
import performance from "../../images/Performance.svg";
import personaltraining from "../../images/PersonalTraining.svg";
import bootcamp from "../../images/BootCamp.svg";


const ProgramWrap = () => {
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
            <Programs images={performance} name={"Performance"}/>
            <Programs images={personaltraining} name={"Personal Training"}/>
            <Programs images={bootcamp} name={"Boot Camp"}/>
        </Container>
        </div>
    );
}

export default ProgramWrap;