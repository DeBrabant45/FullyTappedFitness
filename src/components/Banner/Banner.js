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
    const isBootcamppage = location.pathname === withPrefix("/bootcamp/");
    const isPerformacepage = location.pathname === withPrefix("/performance/");
    const isPersonalpage = location.pathname === withPrefix("/personaltraining/");
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
        case isBootcamppage:
            return divStyle = {
                backgroundColor: 'teal'
            }
            break;
        case isPerformacepage:
            return divStyle = {
                backgroundColor: 'brown'
            }
            break;
        case isPersonalpage:
            return divStyle = {
                backgroundColor: 'red'
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