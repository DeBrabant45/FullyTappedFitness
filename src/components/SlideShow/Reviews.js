import React from "react";
import Container from "../Container/Container.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slidestyle from "./slidestyle.css";


const Reviews = () => {
    return (
        <Container>
            <div style={{ marginBottom: "15px" }}>
                <h2>TESTIMONIALS</h2>
                <h1 >What our Members are Saying</h1>
            </div>
            <span className="slidesize">
                <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                    <span>
                        <iframe className='framestyle' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frob.brown3%2Fposts%2F10100107273560259%3A0&width=500"></iframe>
                    </span>
                    <span>
                        <iframe className='framestyle' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmindy.allos%2Fposts%2F10102773656477366%3A0&width=500"></iframe>
                    </span>
                    <span>
                        <iframe className='framestyle' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjarod.bell%2Fposts%2F10211967008790548&width=500"></iframe>
                    </span>
                    <span>    
                        <iframe className='framestyle' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falyssa.boulton%2Fposts%2F2430514823631727&width=500"></iframe>
                    </span>
                </Carousel>
            </span>
        </Container>
    );
}

export default Reviews;