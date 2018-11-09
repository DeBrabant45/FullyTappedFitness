import React from "react";
import BannerText from "./BannerText.js";
import styles from "./Banner.module.css";


const Banner = (props) => {
    return(
        <div className={styles.bannercontainer} style={props.bgimg}>
            <div className={styles.bannercontent}>
                <div className={styles.bannercontentinfo}>
                    <BannerText first={props.first} second={props.second} third={props.third}/>
                </div>
            </div>
        </div>
    );
}

export default Banner;