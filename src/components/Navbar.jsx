import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <img
                src="https://static.tvmaze.com/images/tvm-header-logo.png"
                alt="img"
                className="navImg"
            />
            <h1 style={{color:"white"}}>Review The Shows</h1>
        </div>
    );
}

export default Navbar;
