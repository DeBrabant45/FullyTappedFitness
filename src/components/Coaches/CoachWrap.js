import React from "react";
import Container from "../Container/Container.js";
import Coaches from "./CoachInfo/Coaches.js";
import data from "./Coachdata.js";
import styles from "./CoachWrap.module.css";


const CoachWrap = () => {
    return (
        <div className={styles.containercolor}>
        <Container>
            <h2>OUR COACHES</h2>
            <h1>Best Proffessionals</h1>
            <div className={styles.coachservices}>
                { data.map(coach =>  
                <Coaches key={coach.name} img={coach.image} name={coach.name} level={coach.level} fblink={coach.facebook} iglink={coach.instagram} twlink={coach.twitter}/> )}
            </div>
        </Container>
        </div>
    );
}

export default CoachWrap;