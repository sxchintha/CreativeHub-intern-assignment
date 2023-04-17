import React from "react";
import "./Slider.style.css";
import { slides } from "../../data/Slider";

const Slider = () => {
    return (
        <div className="slider">
            <div className="animate">
                {slides.map((slide, index) => (
                    <img src={slide} className="slide" alt={'slide ' + index} key={'a' + index} />
                ))}
                {slides.map((slide, index) => (
                    <img src={slide} className="slide" alt={'slide ' + index} key={'b' + index} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
