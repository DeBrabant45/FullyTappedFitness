import React from "react";
import Link from "gatsby-link";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <div className={styles.button}>
            <Link to={props.to}>
                {props.children}
            </Link>
        </div>
    );
}

export default Button;