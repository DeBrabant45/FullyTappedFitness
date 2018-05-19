import React from "react";
import styles from "./Banner.module.css";
import SMList from "../../SocialMedia/SMList";

const Banner = (props) => {
    return(
        <div className={styles.footbanner}>
            <div className={styles.footlogo}>
                <img src={require('../../../images/oldLogo.png')} />
            </div>
             <p>
                The biggest advantage to doing <span className={styles.colorchange}>Performance</span> is being able to be a part of a thriving
                community of like-minded people, all of whom are there to support you in your fitness goals.
            </p>
            <div className={styles.fsocialmedia}>
                <SMList />
            </div>
        </div>
    );
}

export default Banner;