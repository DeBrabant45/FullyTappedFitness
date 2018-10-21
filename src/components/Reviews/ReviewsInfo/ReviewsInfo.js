import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ReviewsInfo = () => {
  return (
    <div style={{marginTop: "1.45rem"}}>
    <Carousel>
        <div>
            <img src={require("../../../images/Sample10.jpg")} />
            <p className="legend">
              This is a welcoming place. I'm new to crossfit and the trainers work with you at your level.
            </p>
            <h6 className="legend">James Peak</h6>
        </div>
        <div>
            <img src={require("../../../images/Sample12.jpg")} />
            <p className="legend">
              I’ve lost over 110 pounds so far and it’s changed my life. 
              Your coaches have given me the tools, motivation, and the support I needed to become the person that I am today.
            </p>
            <h6 className="legend">Kevin Stone</h6>
        </div>
        <div>
            <img src={require("../../../images/Sample12.jpg")} />
            <p className="legend">
              It is an awesome workout! I have seen significant changes in my strength,
              endurance, and shape. CrossFit IronFit is for you if you want to build a better body.
            </p>
            <h6 className="legend">Rose Martin</h6>
        </div>
    </Carousel>
    </div>
  );
  }


export default ReviewsInfo;