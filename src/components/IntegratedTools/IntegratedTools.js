import React from "react";
import "./IntegratedTools.style.css";
import ToolCard from "./ToolCard";
import Button from "../Button/Button";
import { tools } from "../../data/Tools"

const IntegratedTools = () => {
    return (
        <div>
            <div className="integratedTools">
                <div className="title">
                    Integrated With<br />
                    The Tools You Love
                </div>
                <Button text="Check Our Tools" />
            </div>
            <div className="cards flex">
                <div className="one-card">
                    <ToolCard tool={tools[0]} large={true} />
                </div>
                <div className="two-card">
                    <ToolCard tool={tools[1]} />
                    <ToolCard tool={tools[2]} />
                </div>
                <div className="two-card">
                    <ToolCard tool={tools[3]} />
                    <ToolCard tool={tools[4]} />
                </div>
                <div className="one-card">
                    <ToolCard tool={tools[5]} large={true} />
                </div>
            </div>
        </div>

    );
};

export default IntegratedTools;