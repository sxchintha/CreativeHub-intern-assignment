import React from "react";
import "./PageHeadline.style.css";
import Button from "../Button/Button";

const PageHeadline = ({ headingL1, headingL2, body, image }) => {
    return (
        <div className="heading">
            <div className="headline">
                {headingL1}
            </div>
            <div className="headline headingImg">
                {headingL2}
                <span className="headingImg">
                    <img src={image} alt="heading" />
                </span>
            </div>
            <div className="headingBody">{body}</div>
            <div className="headingBtn">
                <Button text="Check Out Tools" />
            </div>
        </div>
    );
};

export default PageHeadline;
