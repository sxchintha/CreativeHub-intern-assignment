import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "../Button/Button";
import Logo from "../../assets/logo.png";
import "./NavBar.style.css";

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <Link to="/">
                        <img src={Logo} alt="logo" className="logo"/>
                </Link>
                <NavLinks />
                <Button text='Sign Up'/>
            </div>
        </nav>

    );
};

export default NavBar;