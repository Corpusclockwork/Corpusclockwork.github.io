import "./DisplayImage.css";
import { useState } from "react";
import Descriptions from "../AnimationDescriptions"

function DisplayAnimation({imageSrc}) {
    const videoSrc = imageSrc.default.replace('png', 'mp4');
    const description = Descriptions.get(videoSrc.substring(videoSrc.lastIndexOf("/") + 1));

    return (
        <div className="DisplayImageBodyContainer">  
            <div className="DisplayImageBody">
                <video className="DisplayImageImage" controls >
                    <source src={videoSrc} type="video/mp4"/>
                </video>
                <div className="DisplayImageText">
                    {description}
                </div>
            </div> 
        </div>
    )
}

export default DisplayAnimation;