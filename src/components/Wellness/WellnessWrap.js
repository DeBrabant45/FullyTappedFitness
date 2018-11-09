import React from "react";
import Container from "../Container/Container.js";
import Class from "../Class/ClassInfo/Class.js";
import styles from "./WellnessWrap.module.css";


const WellnessWrap = () => {
    return (
        <div>
            <Container>
                <Class classcontain={styles.class} classstyle={styles.preformimg} flip={styles.classcontainflip} to="/physicaltherapy/" name="Physical Therapy" info="Experience at a Glance, Doctorate of Physical Therapy from the University of Michigan. 15+ years of experience!"/>                          
            </Container>
            <div className={styles.containercolor}>
                <Container>
                    <Class classcontain={styles.classflip} classstyle={styles.bootimg} to="/massagetherapy/" name="Massage Therapy" info="Licensed with the State of Michigan and board certified, 10+ years of experience!"/>
                </Container>
            </div>
        </div>
    );
}

export default WellnessWrap;