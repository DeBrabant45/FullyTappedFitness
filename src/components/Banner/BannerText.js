import React from "react";
import { withPrefix } from "gatsby-link"
import styles from "./BannerText.module.css";

function firstText() {
    const isHomepage = location.pathname === withPrefix("/");
    const isClassespage = location.pathname === withPrefix("/classes/");
    const isWellnesspage = location.pathname === withPrefix("/wellness/");
    const isSchedulepage = location.pathname === withPrefix("/schedule/");
    const isAboutpage = location.pathname === withPrefix("/about/");
    const isBootcamppage = location.pathname === withPrefix("/bootcamp/");
    const isPerformacepage = location.pathname === withPrefix("/performance/");
    const isPersonalpage = location.pathname === withPrefix("/personaltraining/");
    let first;
    switch (true) {
        case isHomepage:
            return first = 'DISCOVER'
            break;
        case isClassespage:
            return first = 'WORLD CLASS'
            break;
        case isWellnesspage:
            return first = 'FIND'
            break;
        case isSchedulepage:
            return first = 'CHECK OUT OUR MONTHLY'
            break;
        case isAboutpage:
            return first = 'TAKE A LOOK AT WHAT WERE'
            break;
        case isBootcamppage:
            return first = 'WE OFFER'
            break;
        case isPerformacepage:
            return first = 'WE OFFER'
            break;
        case isPersonalpage:
            return first = 'WE OFFER'
            break;
    } 
}

function secondText() {
    const isHomepage = location.pathname === withPrefix("/");
    const isClassespage = location.pathname === withPrefix("/classes/");
    const isWellnesspage = location.pathname === withPrefix("/wellness/");
    const isSchedulepage = location.pathname === withPrefix("/schedule/");
    const isAboutpage = location.pathname === withPrefix("/about/");
    const isBootcamppage = location.pathname === withPrefix("/bootcamp/");
    const isPerformacepage = location.pathname === withPrefix("/performance/");
    const isPersonalpage = location.pathname === withPrefix("/personaltraining/");
    let second;
    switch (true) {
        case isHomepage:
            return second = 'LIMITLESS'
            break;
        case isClassespage:
            return second = 'PROGRAMS'
            break;
        case isWellnesspage:
            return second = 'WELLNESS'
            break;
        case isSchedulepage:
            return second = 'SCHEDULE'
            break;
        case isAboutpage:
            return second = 'ABOUT'
            break;
        case isBootcamppage:
            return second = 'THE BEST'
            break;
        case isPerformacepage:
            return second = 'THE BEST'
            break;
        case isPersonalpage:
            return second = 'THE BEST'
            break;
    } 
}

function thirdText() {
    const isHomepage = location.pathname === withPrefix("/");
    const isClassespage = location.pathname === withPrefix("/classes/");
    const isWellnesspage = location.pathname === withPrefix("/wellness/");
    const isSchedulepage = location.pathname === withPrefix("/schedule/");
    const isAboutpage = location.pathname === withPrefix("/about/");
    const isBootcamppage = location.pathname === withPrefix("/bootcamp/");
    const isPerformacepage = location.pathname === withPrefix("/performance/");
    const isPersonalpage = location.pathname === withPrefix("/personaltraining/");
    let third;
    switch (true) {
        case isHomepage:
            return third = 'You dont have to be great to start'
            break;
        case isClassespage:
            return third = 'Choose a program'
            break;
        case isWellnesspage:
            return third = 'We offer top notch services'
            break;
        case isSchedulepage:
            return third = 'Book a class today'
            break;
        case isAboutpage:
            return third = 'Tour our Gym today'
            break;
        case isBootcamppage:
            return third = 'Bootcamp around'
            break;
        case isPerformacepage:
            return third = 'Tour our Gym today'
            break;
        case isPersonalpage:
            return third = 'Bootcamp around'
            break;
    } 
}

const BannerText = () => {
    return(
        <div className={styles.bannertext}>
            <p className={styles.beforeH}>
                {firstText()}
            </p>
             <h1 className={styles.head}>
                {secondText()}
            </h1>
            <p className={styles.afterH}>
                {thirdText()}
            </p>
        </div>
    );
}

export default BannerText;