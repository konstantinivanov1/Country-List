import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <h1>Country List</h1>
            <ul>
                <Link to="/">
                    <li>All Countries</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;