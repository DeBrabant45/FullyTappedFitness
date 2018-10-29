import React from "react";
import Button from "../../Button/Button.js";
import ClassNav from "../ClassNav/ClassNav.js";
import styles from "./SubClass.module.css";


const SubClass = (props) => {
    return (
        <div className={styles.classcontain}>
            <div className={styles.classinfo}>
                <img src={props.img1} />
                <div className={styles.classtext}>
                    <h2>{props.title}</h2>
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <span className={styles.innerimgright}>
                        <img src={props.img2} />
                    </span> 
                    <p>{props.text3}</p>
                    <p>{props.text4}</p>
                    <span className={styles.innerimgleft}>
                        <img src={props.img3} />
                    </span>
                    <p>{props.text5}</p>
                    <p>{props.text6}</p>
                    <Button to="/about/">SIGN UP</Button>
                </div>
            </div>
            <ClassNav />
        </div>
    );
}

export default SubClass;