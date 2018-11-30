import React from "react";
import Container from "../Container/Container.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slidestyle from "./slidestyle.css";


const Tour = () => {
    return (
        <Container>
            <div style={{ marginBottom: "15px" }}>
                <h2>WE PROVIDE STATE-OF-THE-ART EQUIPMENT</h2>
                <h1>TOUR THE FACILITY</h1>
            </div>
            <div style={{ maxWidth: "750px", display: "inline-block" }}>
                <Carousel>
                    <div>
                        <img src={require("../../images/Sample15.jpg")}/>
                    </div>
                    <div>
                        <img src={require("../../images/Sample12.jpg")}/>
                    </div>
                    <div>
                        <img src={require("../../images/Sample15.jpg")}/>
                    </div>
                </Carousel>
            </div>
        </Container>
    );
}

export default Tour;