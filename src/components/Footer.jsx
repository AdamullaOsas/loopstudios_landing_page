import React from "react";
import logo from "../images/logo.svg";

import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
    const apps = [facebook, instagram, pinterest, twitter];
    const links = ["About", "Careers", "Events", "Products", "Support"];

    return (
        <div className="w-full h-[160px] bg-black flex flex-col items-center justify-center gap-6">
            <div className="w-full max-w-[1110px] max-h-6 flex justify-between">
                <img src={logo} alt="Logo" className="w-[144px]" />
                <div className="flex gap-4">
                    {apps.map((app) => (
                        <a href="/" key={app} className="group relative">
                            <img src={app} alt={app} />
                            <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-6"></span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-[1110px] max-h-6 flex justify-between">
                <div className="flex items-center gap-8 navLink text-white">
                    {links.map((link) => (
                        <a href="/" key={link} className="group relative">
                            {link}
                            <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-6"></span>
                        </a>
                    ))}
                </div>
                <p className="copyRight">
                    © 2021 Loopstudios. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
