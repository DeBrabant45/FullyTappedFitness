import React from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
    return(
        <div className={styles.bannercontainer}>
            <div className={styles.bannercontent}>
                <div className={styles.bannercontentinfo}>
                    <div className={styles.bannertext}>
                        <p className={styles.beforeH}>
                            DISCOVER
                        </p>
                        <h1 className={styles.head}>
                            LIMITLESS
                        </h1>
                        <p className={styles.afterH}>
                            You don't have to be great to start
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;