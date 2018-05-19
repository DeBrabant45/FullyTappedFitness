import React from "react";
import Link from "gatsby-link";
import SMList from "../../SocialMedia/SMList.js";
import styles from "./HeaderSocial.module.css";

const HeaderSocial = (props) => {
    return (
        <div className={styles.info}>
            <SMList />
        </div>
    );
}

export default HeaderSocial;