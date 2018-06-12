import React from "react";
import Container from "../Container/Container.js";
import styles from "./Video.module.css";

const Video = (props) => {
    return (
        <Container>
            <video src={props.url} controls>
                Your browser does not support HTML5 video.
            </video>
        </Container>
    );
}

export default Video;
