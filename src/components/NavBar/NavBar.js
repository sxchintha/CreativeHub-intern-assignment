import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "../Button/Button";
import Logo from "../../assets/logo.png";
import "./NavBar.style.css";

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    const toggleNav = () => {
        const nav = document.getElementById("topNav");
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () =>
            window.scrollY > 50 ? setIsSticky(true) : setIsSticky(false)
        );

        window.addEventListener("resize", () => {
            const nav = document.getElementById("topNav");
            if (window.innerWidth > 1100) {
                nav.style.display = "flex";
            } else {
                nav.style.display = "none";
            }
        });
    }, []);




    return (
        <nav className={isSticky ? 'active' : ""}>
            <div className="container" id="topNav">
                <Link to="/">
                    <img src={Logo} alt="logo" className="logo" />
                </Link>
                <NavLinks />
                <Button text='Sign Up' />
            </div>
            <div className="nav-btn" onClick={toggleNav} >
                <FaBars size={30} />
            </div>
        </nav>

    );
};

export default NavBar;