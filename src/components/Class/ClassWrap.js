import React from "react";
import Container from "../Container/Container.js";
import Class from "../Class/ClassInfo/Class.js";
import styles from "./ClassWrap.module.css"


const ClassWrap = () => {
    return (
        <div>
            <div className={styles.containercolor}>
            <Container>
                <Class classcontain={styles.classflip} classstyle={styles.preformimg} to="/performance/" flip={styles.classcontainflip} classinfo={styles.classinfoflip} name="Performance Training" info="Performance Training classes rely on muscle confusion to encourage strength gains and improved aerobic capacity.
                                        A wide range of equipment and exercises are used in this class including barbells, dumbbells, kettlebells,
                                        rowing machines, bikes, and more.  These classes are challenging, but can include all kinds of modifications
                                        to suit a range of difficulties, from beginner to advanced."/>                          
            </Container>
            </div>
            <Container>
                <Class classcontain={styles.class} classstyle={styles.bootimg} to="/bootcamp/" classinfo={styles.classinfo} name="Boot Camp" info=" Boot Camp is a high energy class centered on interval training to burn fat, improve strength, and tone muscle.
                                        These classes still work with a variety of equipment, but tend to be less technical and involve lighter weights than our Performance class."/>
            </Container>
            <div className={styles.containercolor}>
            <Container>
                <Class classcontain={styles.classflip} classstyle={styles.personalimg} flip={styles.classcontainflip} to="/personaltraining/" classinfo={styles.classinfoflip} name="Personal Training" info=" If you feel like you need a custom program or one to one training outside of our classes we offer personal training sessions.  
                                        All of our coaches are certified personal trainers who are here to help you meet your fitness goals. Reach out today!"/>  
            </Container>
            </div>
        </div>
    );
}

export default ClassWrap;