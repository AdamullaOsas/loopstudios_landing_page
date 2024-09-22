import React from "react";
import hero from "../images/desktop/image-hero.jpg";

const Header = () => {
    return (
        <div
            className="relative w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})`, height: "650px" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
    );
};

export default Header;
