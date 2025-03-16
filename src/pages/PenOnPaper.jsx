import "./Art.css";
import {Link} from "react-router";

function PenOnPaper({penOnPaperImages}) {
    const imageList = Object.values(penOnPaperImages).map((image, index) => (
        <div key={`imageContainer_${index}`} className="imageContainer">
            <Link to={`/penonpaper/image/${index}`}>
                <img loading="lazy" key={`image_${index}`} src={image.default} alt={`Image ${index}`} className="image" />
            </Link>
        </div>
      ));

    return(
        <div className="ArtBodyContainer">
            <div id ="/penonpaper" className="ArtBody">
                <div className="ArtText">
                    All of these are done straight to paper using ballpoint pen, using pencil is too stressful for me, makes the whole process seem overly important. 
                    Also having the chance to correct mistakes means that I will never be done if I use pencil. Most of these are pretty old
                    and I don't really like the way they look anymore, and don't have much to say about them. 
                    Less descriptions are present in this section, but I hope you have a good time anyway :).
                </div>
                <div className="imagesContainer" key="imagesContainer"> 
                    {imageList}
                </div>
            </div>
        </div>
    );
};


export default PenOnPaper;