import React from "react";
import "./Tiles.style.css";
import Tile from "./Tile";
import { tiles } from "../../data/Tiles"

const Tiles = () => {
    return (
        <div className="tiles flex">
            <div className="tileLeft">
                <Tile tile={tiles[0]} />
                <Tile tile={tiles[1]} />
            </div>
            <div className="tileRight">
                <Tile tile={tiles[2]} large={true} />
            </div>
        </div>
    );
};

export default Tiles;
