import React from "react";
import Container from "../Container/Container";
import styles from "./contact.module.css";
import image from "../../images/dumbbell.png";

const Contact = (props) => {
    return (
        <Container>
            <div className={styles.contain}>
            <h1 className={styles.header}>Get in Contact with us!</h1>
            <p className={styles.info}>Tell us your Fitness goals and we will help make them come true!</p>
            <form className={styles.contactForm} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <h4>Your Name:</h4>
                <input className={styles.contactInput} name="name" placeholder="John Smith *" type="text" required/>
                <h4>Leave us your number:</h4>
                <input className={styles.contactInput} name="number" placeholder="121-666-111 *" type="number" required/>
                <h4>Leave your best eMail:</h4>
                <input className={styles.contactInput} name="email" placeholder="John@gmail.com" type="email" />
                <h4>Ask us anything or leave us anything:</h4>
                <textarea rows="4" cols="50" className={styles.questionBox} name="subject" placeholder="My fitness goal is..." type="text" />
                <button className={styles.button}>
                    <img src={image}/>
                </button>
            </form>
            </div>
        </Container>
    );
}

export default Contact;