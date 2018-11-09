import React from "react";
import Container from "../../Container/Container.js";
import SubClass from "../ClassInfo/SubClass.js";
import ColorContainer from "../../Container/ColorContainer.js"
import Img01 from "../../../images/IMG_4634.jpg";

const PersonalTrain = (props) => {
    return(
        <ColorContainer>
            <Container>
                <SubClass img1={Img01} img2={Img01} img3={Img01} title="Personal Training" text1=" Our staff are all professionals with years of fitness experience. We have various trainers for you to choose from. 
                                        Each brings their own fitness specialty and unique training style, but all are committed to ensuring safe and effective workouts. 
                                        Let us match you with the perfect trainer to achieve your fitness dreams.  Click on the button below to message us directly, or to setup a visit to meet our trainers."/>
            </Container>
        </ColorContainer>
    );
}

export default PersonalTrain;