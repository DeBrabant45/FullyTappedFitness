import React from "react";
import Container from "../../Container/Container.js";
import SubClass from "../ClassInfo/SubClass.js";
import ColorContainer from "../../Container/ColorContainer.js"
import Img01 from "../../../images/IMG_5288.jpg";

const Performance = (props) => {
    return(
        <ColorContainer>
            <Container>
                <SubClass img1={Img01} img2={Img01} img3={Img01} title="Performance Training" text1="                                        Performance Training classes rely on muscle confusion to encourage strength gains and improved aerobic capacity.
                                        A wide range of equipment and exercises are used in this class including barbells, dumbbells, kettlebells,
                                        rowing machines, bikes, and more.  These classes are challenging, but can include all kinds of modifications
                                        to suit a range of difficulties, from beginner to advanced."/>
            </Container>
        </ColorContainer>
    );
}

export default Performance;