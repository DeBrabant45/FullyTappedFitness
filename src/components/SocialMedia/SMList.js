import React from "react";
import Facebook from "./SMButtons/FBButton.js";
import Instagram from "./SMButtons/IGButton.js";
import Twitter from "./SMButtons/TWButton.js";
import GoogleMaps from "./SMButtons/GMButton.js";

const SMList = (props) => {
    return (
        <span className={props.media}>
            <Facebook to='https://www.facebook.com/FullyTappedFitness/'></Facebook>
            <Instagram to='https://www.instagram.com/fullytappedfitness/'></Instagram>
            <Twitter to='https://www.twitter.com/Unleashed_Fit'></Twitter>
            <GoogleMaps to='https://www.google.com/maps?cid=1268269634068772280'></GoogleMaps>
        </span>
    );
}

export default SMList;