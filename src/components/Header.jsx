import React, { useEffect, useState } from "react";
import hero from "../images/desktop/image-hero.jpg";
import logo from "../images/logo.svg";
import MobileNav from "./MobileNav";

const Header = () => {
    const links = ["About", "Careers", "Events", "Products", "Support"];
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="relative w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})`, height: "650px" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative">
                <section className="max-w-[1110px] mx-auto w-full flex flex-col gap-[130px]">
                    <nav className="flex justify-between items-center w-full br:mt-16 mt-10 transition-all">
                        <img
                            src={logo}
                            alt="logo"
                            className="br:ml-0 ml-6 transition-all"
                        />
                        {width < 1100 ? (
                            <MobileNav />
                        ) : (
                            <div className="flex items-center gap-8 navLink text-white">
                                {links.map((link) => (
                                    <a
                                        href="/"
                                        key={link}
                                        className="group relative"
                                    >
                                        {link}
                                        <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-6"></span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </nav>
                    <div className="flex items-center justify-center br:max-w-[650px] br:max-h-[278px] max-w-[327px] max-h-[196px] border-[2px] p-10 br:mx-0 mx-auto transition-all duration-500">
                        <h1 className="br:inBox inBoxLittle text-white mt-4 transition-all duration-500">
                            Immersive experiences that deliver
                        </h1>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Header;
