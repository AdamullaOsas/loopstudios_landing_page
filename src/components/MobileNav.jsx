import React, { useState } from "react";
import hamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = ["About", "Careers", "Events", "Products", "Support"];

    return (
        <div>
            <img
                src={hamburger}
                alt="hamburger"
                className="br:mr-0 mr-6"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div
                className={`fixed top-0 left-0 w-full h-screen z-50 bg-black transform transition-transform duration-500 ease-in-out ${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex justify-between items-center mt-10">
                    <img src={logo} alt="logo" className="br:ml-0 ml-6 " />
                    <img
                        src={close}
                        alt="close"
                        className="br:mr-0 mr-6 size-5"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <div className="flex gap-6 navLinkBig flex-col mt-[160px] ml-6">
                    {links.map((link) => (
                        <a href="/" key={link} className="group relative ">
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
