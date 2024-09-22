import React from "react";
import hero from "../images/desktop/image-hero.jpg";
import logo from "../images/logo.svg";

const Header = () => {
    return (
        <div
            className="relative w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})`, height: "650px" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative flex flex-col gap-[130px]">
                <nav className="flex justify-between items-center max-w-[1110px] mx-auto w-full mt-16">
                    <img src={logo} alt="logo" />
                    <div className="flex items-center gap-8 navLink text-white">
                        <a href="/">About</a>
                        <a href="/">Careers</a>
                        <a href="/">Events</a>
                        <a href="/">Products</a>
                        <a href="/">Support</a>
                    </div>
                </nav>
                <div className="flex items-center justify-center max-w-[650px] max-h-[278px] border-[2px] p-10 ml-[165px]">
                    <h1 className="inBox text-white">
                        Immersive experiences that deliver
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
