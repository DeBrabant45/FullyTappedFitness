import React from "react";
import Container from "../Container/Container.js";
import Button from "../Button/Button.js";
import Facebook from "../SocialMedia/SMButtons/FBButton.js";
import Instagram from "../SocialMedia/SMButtons/IGButton.js";
import Twitter from "../SocialMedia/SMButtons/TWButton.js";
import styles from "./Coaches.module.css";

const Coaches = (props) => {
    return (
        <div className={styles.containercolor}>
        <Container>
            <h2>OUR COACHES</h2>
            <h1>Best Proffessionals</h1>
            <div className={styles.coachservices}>
                <div className={styles.medium}>
                    <div>
                        <img src="https://static.wixstatic.com/media/eed6b4_7ef00cba2b4447479b8bd8aed1e5ae9d~mv2_d_3024_4032_s_4_2.jpeg/v1/crop/x_277,y_531,w_2655,h_2657/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01/eed6b4_7ef00cba2b4447479b8bd8aed1e5ae9d~mv2_d_3024_4032_s_4_2.webp" />
                    </div>
                    <div className={styles.textcontain}>
                        <h3>Andrey Makhadov</h3>
                        <p>Crossfit Level 1</p>
                        <Button to="/about/">MORE DETAILS</Button>
                        <div className={styles.coachsm}>
                            <Facebook to='https://www.facebook.com/andrey.makhadov'/>
                            <Instagram to='https://www.instagram.com/body_by_andrey/'/>
                            <Twitter to='https://www.twitter.com/Unleashed_Fit'/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    );
}

export default Coaches;