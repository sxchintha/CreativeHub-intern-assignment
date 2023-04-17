import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.style.css";

const NavLinks = () => {
    return (
        <div className="nav-links">
            <Link to="/" className="nav-link">Products</Link>
            <Link to="/" className="nav-link">Solutions</Link>
            <Link to="/" className="nav-link">Resource</Link>
            <Link to="/" className="nav-link">Enterprise</Link>
            <Link to="/" className="nav-link">Pricing</Link>
        </div>

    );
};

export default NavLinks;