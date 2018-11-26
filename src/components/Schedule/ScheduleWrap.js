import React from "react";
import Container from "../Container/Container.js";
import Color from "../Container/ColorContainer.js"; 

const ScheduleWrap = (props) => {
    return(
        <div>
            <Container>
                <iframe src="https://unleashedfitness.zenplanner.com/zenplanner/portal/calendar.cfm?type=Calendar&FRAME=true" id="idZenPlannerFrame">
                    <noframes>
                        <a href="https://unleashedfitness.zenplanner.com/zenplanner/portal/calendar.cfm">Online Calendar</a>
                    </noframes>
                </iframe>
            </Container>
            <Color>
            <Container>
                    <h1>Sign Up For A Free Class</h1>
                    <iframe src="https://unleashedfitness.zenplanner.com/zenplanner/portal/freeTrial.cfm?type=FreeTrial&FRAME=true " id="idZenPlannerFrame">
                        <noframes>
                            <a href="https://unleashedfitness.zenplanner.com/zenplanner/portal/freeTrial.cfm">Free Class Registration</a>
                        </noframes>
                    </iframe>
            </Container>
            </Color>
        </div>
    );
}

export default ScheduleWrap;