import React from "react";
import "./ToolCard.style.css";

const ToolCard = ({ tool, large }) => {
    return (
        <div className={large ? "card largeCard" : "card smallCard"}>
            <div className="cardImage">
                <img src={tool.image} alt={tool.title} />
            </div>
            <div className="cardText" style={{ justifyContent: large ? 'flex-end' : 'flex-start' }}>
                <div className="cardHead">
                    {tool.title}
                </div>
                <div className="cardSub">
                    {tool.body}
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
