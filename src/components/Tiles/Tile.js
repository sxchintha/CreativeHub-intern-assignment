import React from "react";
import "./Tile.style.css";

const Tile = ({ tile, large }) => {
    return (
        <div className={large? "largeTile": "smallTile"} style={{ backgroundColor: tile.color, }}>
            <div className="tileText">
                <div className="tileHead">
                    {tile.title}
                </div>
                <div className="tileSub">
                    {tile.body}
                </div>
            </div>
            <div className="tileImage">
                <img src={tile.image} alt={tile.title} />
            </div>

        </div>
    );
};

export default Tile;
