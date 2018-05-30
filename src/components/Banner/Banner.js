import React from "react";
import { withPrefix } from "gatsby-link";
import BannerText from "./BannerText.js";
import styles from "./Banner.module.css";

function changeBackground() {
    const isHomepage = location.pathname === withPrefix("/");
    const isClassespage = location.pathname === withPrefix("/classes/");
    const isWellnesspage = location.pathname === withPrefix("/wellness/");
    const isSchedulepage = location.pathname === withPrefix("/schedule/");
    const isAboutpage = location.pathname === withPrefix("/about/");
    let divStyle;
    switch (true) {
        case isHomepage:
            return divStyle = {
                backgroundColor: 'blue'
            }
            break;
        case isClassespage:
            return divStyle = {
                backgroundColor: 'black'
            }
            break;
        case isWellnesspage:
            return divStyle = {
                backgroundColor: 'green'
            }
            break;
        case isSchedulepage:
            return divStyle = {
                backgroundColor: 'navy'
            }
            break;
        case isAboutpage:
            return divStyle = {
                backgroundColor: 'purple'
            }
            break;
    } 
}

const Banner = (props) => {
    return(
        <div className={styles.bannercontainer} style={changeBackground()}>
            <div className={styles.bannercontent}>
                <div className={styles.bannercontentinfo}>
                    <BannerText/>
                </div>
            </div>
        </div>
    );
}

export default Banner;