import React from "react";
import Container from "../../Container/Container.js";
import SubClass from "../ClassInfo/SubClass.js";
import ColorContainer from "../../Container/ColorContainer.js"
import Img01 from "../../../images/IMG_4559.jpg";

const Bootcamp = (props) => {
    return(
        <ColorContainer>
            <Container>
                <SubClass img1={Img01} img2={Img01} img3={Img01} title="Boot Camp" text1="Boot Camp classes are filled with constant action and motion.  
                                        Circuit workouts based on interval training and a variety of workout stations are key staples in these classes.  
                                        The movements are typically less technical than our performance training class, but that by no means makes these classes any less of a workout.  Prepare to sweat!"/>
            </Container>
        </ColorContainer>
    );
}

export default Bootcamp;