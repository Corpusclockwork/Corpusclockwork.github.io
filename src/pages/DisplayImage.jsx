import "./DisplayImage.css";
import { useState } from "react";
import DigitalArtDescriptions from "../DigitalArtDescriptions"
import PenOnPaperDescriptions from "../PenOnPaperDescriptions"

function DisplayImage({imageSrc, imageType}) {
    const [image, setImage] = useState(null);
    import(imageSrc.default).then(imageToSet => setImage(imageToSet.default));
    let description;
    if (imageType=== "DigitalArt"){
        description = DigitalArtDescriptions.get(imageSrc.default.substring(imageSrc.default.lastIndexOf("/") + 1));
    } else if (imageType = "PenOnPaper"){
        description = PenOnPaperDescriptions.get(imageSrc.default.substring(imageSrc.default.lastIndexOf("/") + 1));
    }

    return (
        <div className="DisplayImageBodyContainer">  
            <div className="DisplayImageBody">
                <img className="DisplayImageImage" src={imageSrc.default}/>
                <div className="DisplayImageText">
                    {description}
                </div>
            </div> 
        </div>
    )
}

export default DisplayImage;