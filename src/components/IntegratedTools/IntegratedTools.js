import React from "react";
import { useMediaQuery } from 'react-responsive'
import "./IntegratedTools.style.css";
import ToolCard from "./ToolCard";
import Button from "../Button/Button";
import { tools } from "../../data/Tools"

const IntegratedTools = () => {
    const screen1200 = useMediaQuery({ query: '(max-width: 1200px)' })
    const screen992 = useMediaQuery({ query: '(max-width: 992px)' })
    const screen576 = useMediaQuery({ query: '(max-width: 576px)' })

    return (
        <div>
            <div className="integratedTools">
                {screen576 ?
                    <div className="title">
                        Integrated With The Tools You Love
                    </div>
                    :
                    <div className="title">
                        Integrated With<br />
                        The Tools You Love
                    </div>
                }

                <Button text="Check Our Tools" />
            </div>
            {screen992 ? <div className="cards flex">
                <div className="two-card">
                    <ToolCard tool={tools[0]} />
                    <ToolCard tool={tools[1]} />
                    <ToolCard tool={tools[2]} />
                </div>
                <div className="two-card">
                    <ToolCard tool={tools[3]} />
                    <ToolCard tool={tools[4]} />
                    <ToolCard tool={tools[5]} />
                </div>
            </div> :
                (screen1200 ?
                    <div className="cards flex">
                        <div className="two-card">
                            <ToolCard tool={tools[0]} />
                            <ToolCard tool={tools[1]} />
                        </div>
                        <div className="two-card">
                            <ToolCard tool={tools[2]} />
                            <ToolCard tool={tools[3]} />
                        </div>
                        <div className="two-card">
                            <ToolCard tool={tools[4]} />
                            <ToolCard tool={tools[5]} />
                        </div>
                    </div> :
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
                )
            }
        </div>

    );
};

export default IntegratedTools;