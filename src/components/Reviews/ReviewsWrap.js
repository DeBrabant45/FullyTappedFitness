import React from "react";
import Container from "../Container/Container.js";
import ReviewsInfo from "./ReviewsInfo/ReviewsInfo.js";
import styles from "./ReviewsWrap.module.css";


const ReviewsWrap = () => {
    return (
        <div>
        <Container>
            <h2>TESTIMONIALS</h2>
            <h1 className={styles.heads}>What our Members are Saying</h1>
            <ReviewsInfo />
        </Container>
        </div>
    );
}

export default ReviewsWrap;