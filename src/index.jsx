import { StrictMode } from 'react';
import { BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import MainPage from './MainPage.jsx';
import {Routes, Route } from "react-router-dom";
import DisplayImage from "./pages/DisplayImage.jsx";
import DigitalArt from './pages/DigitalArt.jsx';'./pages/DigitalArt.jsx';
import About from './pages/About.jsx';
import PenOnPaper from './pages/PenOnPaper.jsx';'./pages/PenOnPaper.jsx';
import Animation from './pages/Animation.jsx';import DisplayAnimation from './pages/DisplayAnimation.jsx';
'./pages/Animation.jsx';

const digitalImages = import.meta.glob('./DigitalArtImages/*.png', { eager: true });
const penOnPaperImages = import.meta.glob('./PenOnPaperImages/*.jpg', { eager: true });
const animationImages = import.meta.glob('./Animations/*.png', { eager: true });

const imageRoutes= Object.values(digitalImages).map((image, index) => (
    <Route key={`route_${index}`} path={`/digitalart/image/${index}`} element={<DisplayImage imageSrc={image} imageType="DigitalArt"/>} />
));
const penOnPaperRoutes= Object.values(penOnPaperImages).map((image, index) => (
    <Route key={`route_${index}`} path={`/penonpaper/image/${index}`} element={<DisplayImage imageSrc={image} imageType="PenOnPaper"/>} />
));
const animationRoutes= Object.values(animationImages).map((image, index) => (
    <Route key={`route_${index}`} path={`/animation/${index}`} element={<DisplayAnimation imageSrc={image}/>} />
));

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <MainPage />
        </StrictMode>
        <Routes>
                <Route path="/" index element={<About />}/>
                <Route path="/digitalart" element={<DigitalArt digitalImages={digitalImages} />}/>
                {imageRoutes}
                <Route path="/penonpaper" element={<PenOnPaper penOnPaperImages={penOnPaperImages}/>} />
                {penOnPaperRoutes}
                <Route path="/animation" element={<Animation animationImages={animationImages}/>} />
                {animationRoutes}
        </Routes>
    </BrowserRouter>
)
