import React from "react";
import { useMediaQuery } from 'react-responsive'
import "./Tiles.style.css";
import Tile from "./Tile";
import { tiles } from "../../data/Tiles"

const Tiles = () => {
    const screen992 = useMediaQuery({ query: '(max-width: 992px)' })

    return (
        <div className="tiles flex">
            {screen992 ?
                <>
                    <div className="tileLeft">
                        <Tile tile={tiles[0]} />
                        <Tile tile={tiles[1]} />
                        <Tile tile={tiles[2]} />
                    </div>
                </>
                :
                <>
                    <div className="tileLeft">
                        <Tile tile={tiles[0]} />
                        <Tile tile={tiles[1]} />
                    </div>
                    <div className="tileRight">
                        <Tile tile={tiles[2]} large={true} />
                    </div>
                </>
            }

        </div>
    );
};

export default Tiles;
