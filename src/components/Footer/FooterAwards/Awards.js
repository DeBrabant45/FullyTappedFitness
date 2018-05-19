import React from "react";
import styles from "./Awards.module.css";

const Awards = (props) => {
    return(
        <div className={styles.award}>
            <span>
                {props.children}
            </span>
        </div>
    );
}

export default Awards;