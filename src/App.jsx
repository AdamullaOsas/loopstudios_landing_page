import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeirdGuy from "./components/WeirdGuy";
import Creatures from "./components/Creatures";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";

const App = () => {
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
        <div className="min-h-screen w-full flex flex-col">
            <Header />
            <WeirdGuy />
            <Creatures />
            {width > 1100 ? <Footer /> : <MobileFooter />}
        </div>
    );
};

export default App;
