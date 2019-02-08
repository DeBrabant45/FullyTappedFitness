import React from "react";
import Container from "../Container/Container.js";

const ScheduleWrap = (props) => {
    return(
        <div>
            <Container>
                <iframe src="https://app.wodify.com/AdminSchedule/Public_Class_Calendar.aspx?TenantKey=5mhd2OMdUy&Location_Id=7140&Program_Id=54450,54784,54785,54786,55123,55203" style={{ width: "1200px", height: "650px", maxWidth: "100%", maxHeight: "100%", border: "none" }}></iframe>
            </Container>
        </div>
    );
}

export default ScheduleWrap;