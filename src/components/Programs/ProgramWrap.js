import React from "react";
import Container from "../Container/Container.js";
import Programs from "./ProgramInfo/Programs.js";
import styles from "../Programs/ProgramWrap.module.css";
import data from "./Programdata.js";


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
            { data.map(program =>  
                <Programs key={program.name} images={program.image} name={program.name} to={program.to} /> )}
        </Container>
        </div>
    );
}

export default ProgramWrap;