import {Link, useLocation, Outlet } from "react-router-dom";
import MainImage from "./MainImage.png";
import "./MainPage.css";
import { scroller } from "react-scroll";

function MainPage() {
    return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
        <div className="Header">
            <div className="HeaderTextContainer">
                Greetings :D
            </div>
            <div className="HeaderImageContainer">
                <img className="HeaderImage" src={MainImage}/>
            </div>
        </div>
        <nav>
            <div className="TabButtonContainer">
                <div className={useLocation().pathname == "/" ? "ActiveTabButton": "TabButton"} >
                <Link onClick={() => scroller.scrollTo('TabButtonContainer', {smooth: true, duration: 300})} className="TabLink" to="/">ABOUT</Link>
                </div>
                <div className={useLocation().pathname.startsWith("/digitalart") ? "ActiveTabButton": "TabButton"} >
                <Link onClick={() => scroller.scrollTo('TabButtonContainer', {smooth: true, duration: 300})} className="TabLink" to="/digitalart">DIGITAL ART</Link>
                </div>
                <div className={useLocation().pathname.startsWith("/penonpaper") ? "ActiveTabButton": "TabButton"} >
                <Link onClick={() => scroller.scrollTo('TabButtonContainer', {smooth: true, duration: 300})} className="TabLink" to="/penonpaper">PEN ON PAPER</Link>
                </div>
                <div className={useLocation().pathname.startsWith("/animation") ? "ActiveTabButton": "TabButton"} >
                <Link onClick={() => scroller.scrollTo('TabButtonContainer', {smooth: true, duration: 300})} className="TabLink" to="/animation">ANIMATION</Link>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default MainPage;
