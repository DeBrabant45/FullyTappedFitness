import React from "react";
import SMList from "../../SocialMedia/SMList.js";
import styles from "./HeaderSocial.module.css";

const HeaderSocial = () => {
    return (
        <div className={styles.info}>
            <SMList />
            <div className={styles.contactus}><span>Contact Us:</span> (248) 383-8117</div>
        </div>
    );
}

export default HeaderSocial;