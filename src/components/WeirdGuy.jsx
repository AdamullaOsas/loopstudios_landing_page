import React from "react";
import guy from "../images/desktop/image-interactive.jpg";

const WeirdGuy = () => {
    return (
        <div className="br:max-w-[1110px] max-w-[90%] mx-auto w-full flex br:mt-[160px] mt-24 transition-all">
            <div className="relative">
                <img src={guy} alt="weird guy" className="" />
                <div className="flex flex-col br:gap-6 gap-4 br:absolute bottom-0 right-[-380px] bg-white br:pt-24 br:pl-24 br:text-start text-center br:mt-0 mt-12 items-center br:items-start transition-all">
                    <h1 className="br:guyBoxTitle guyBoxTitleLittle max-w-[445px] transition-all">
                        The leader in interactive VR
                    </h1>
                    <p className="guyBoxParagraph max-w-[445px]">
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some of the
                        best companies around the globe. Our award-winning
                        creations have transformed businesses through digital
                        experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeirdGuy;
