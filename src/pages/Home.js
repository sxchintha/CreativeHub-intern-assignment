import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PageHeadline from "../components/PageHeadline/PageHeadline";
import HeadingImage from "../assets/faces.png";
import Tiles from "../components/Tiles/Tiles";
import Slider from "../components/Slider/Slider";

import "../styles/Home.style.css"
import IntegratedTools from "../components/IntegratedTools/IntegratedTools";

const Home = () => {
    return (
        <div className="homeBody">
            <NavBar />
            <div className="bodyContainer">
                <div className="homeHeadline">
                    <PageHeadline
                        headingL1="Transform with"
                        headingL2="Sass Solution "
                        image={HeadingImage}
                        body="Vitae dictum mollis vel aliquam tortor aliquam sed nunc. Congue eros velit augue nisl. Vitae convallis blandit vulputaate enim sollicitudin tristique velit orci."
                    />
                </div>
                <div className="homeTiles">
                    <Tiles />
                </div>
                <div className="homeSlider">
                    <Slider />
                </div>
                <div className="homeIntegratedTools">
                    <IntegratedTools />
                </div>
            </div>
        </div>
    );
};

export default Home;