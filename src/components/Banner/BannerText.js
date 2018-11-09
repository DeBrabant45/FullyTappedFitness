import React from "react";
import styles from "./BannerText.module.css";

const BannerText = (props) => {
    return(
        <div className={styles.bannertext}>
            <p className={styles.beforeH}>
                {props.first}
            </p>
             <h1 className={styles.head}>
                {props.second}
            </h1>
            <p className={styles.afterH}>
                {props.third}
            </p>
        </div>
    );
}

export default BannerText;