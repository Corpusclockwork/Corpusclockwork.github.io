import "./Art.css";
import {Link} from "react-router";

function DigitalArt({digitalImages}) {
    const imageList = Object.values(digitalImages).map((image, index) => (
        <div key={`imageContainer_${index}`} className="imageContainer">
            <Link to={`/digitalart/image/${index}`}>
                <img loading="lazy" key={`image_${index}`} src={image.default} alt={`Image ${index}`} className="image" />
            </Link>
        </div>
      ));

    return(
        <div className="ArtBodyContainer">
            <div className="ArtBody">
                <div className="ArtText">
                    I used FireAlpaca up until the start of 2025 when I finally brought a
                    new laptop that wouldn't make sounds of agony whenever I tried to run Krita.
                    My current laptop also has a big enough screen that I can actually use Krita comfortably, so that's quite nice.
                    I still use a Wacom Intuos that is around nine years old though.
                </div>
                <div className="imagesContainer" key="imagesContainer"> 
                    {imageList}
                </div>
            </div>
        </div>
    );
};


export default DigitalArt;