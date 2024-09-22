import React, { useEffect, useState } from "react";
import image1 from "../images/desktop/image-deep-earth.jpg";
import image2 from "../images/desktop/image-night-arcade.jpg";
import image3 from "../images/desktop/image-soccer-team.jpg";
import image4 from "../images/desktop/image-grid.jpg";
import image5 from "../images/desktop/image-from-above.jpg";
import image6 from "../images/desktop/image-pocket-borealis.jpg";
import image7 from "../images/desktop/image-curiosity.jpg";
import image8 from "../images/desktop/image-fisheye.jpg";

import littleImage1 from "../images/mobile/image-deep-earth.jpg";
import littleImage2 from "../images/mobile/image-night-arcade.jpg";
import littleImage3 from "../images/mobile/image-soccer-team.jpg";
import littleImage4 from "../images/mobile/image-grid.jpg";
import littleImage5 from "../images/mobile/image-from-above.jpg";
import littleImage6 from "../images/mobile/image-pocket-borealis.jpg";
import littleImage7 from "../images/mobile/image-curiosity.jpg";
import littleImage8 from "../images/mobile/image-fisheye.jpg";

const Creatures = () => {
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
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ];

    const littleImages = [
        littleImage1,
        littleImage2,
        littleImage3,
        littleImage4,
        littleImage5,
        littleImage6,
        littleImage7,
        littleImage8,
    ];

    const titles = [
        "DEEP EARTH",
        "NIGHT ARCADE",
        "SOCCER TEAM VR",
        "THE GRID",
        "FROM UP ABOVE VR",
        "POCKET BOREALIS",
        "THE CURIOSITY",
        "MAKE IT FISHEYE",
    ];
    return (
        <div className="max-w-[1114px] w-full mx-auto br:my-[184px] my-24">
            <div className="flex justify-between items-center br:mb-20 mb-12">
                <h1 className="guyBoxTitle br:mx-0 mx-auto">OUR CREATIONS</h1>
                <button className="br:relative h-10 w-[157px] border-[1px] border-black group overflow-hidden hidden">
                    <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                    <p className="relative z-10 group-hover:text-white buttonText transition-colors duration-500">
                        SEE ALL
                    </p>
                </button>
            </div>

            <section className="grid br:grid-cols-4 grid-cols-1 gap-[30px] transition-all">
                {width > 1100
                    ? images.map((image, index) => (
                          <Boxie
                              key={index}
                              image={image}
                              title={titles[index]}
                          />
                      ))
                    : littleImages.map((image, index) => (
                          <Boxie
                              key={index}
                              image={image}
                              title={titles[index]}
                          />
                      ))}
            </section>

            <button className="br:hidden h-10 w-[157px] border-[1px] border-black group overflow-hidden relative mt-8 flex items-center justify-center mx-auto">
                <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <p className="relative z-10 group-hover:text-white buttonText transition-colors duration-500">
                    SEE ALL
                </p>
            </button>
        </div>
    );
};

const Boxie = ({ image, title }) => {
    return (
        <div className="relative w-full br:max-w-[256px] max-w-[90%] group overflow-hidden mx-auto br:mx-0">
            <img src={image} alt={title} className="w-full" />
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-75 transition-opacity duration-300 ease-in-out group-hover:cursor-pointer"></span>
            <h2 className="absolute left-10 bottom-[32px] text-white max-w-[170px] boxTitle group-hover:text-black transition-colors duration-500">
                {title}
            </h2>
        </div>
    );
};

export default Creatures;
