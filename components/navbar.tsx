import React from "react";

export default function Navbar() {

    return (
        <nav className="flex items-center justify-center w-full h-16 bg-MainGreen-200">
            <p className="bg-MainGreen-300 h-10 w-10 rounded-full text-lg text-white text-center border-2 border-MainGreen-300 leading-10 mx-2 box-content">
                1
            </p>
            <hr className="w-10" />
            <p className="bg-white h-10 w-10 rounded-full text-lg text-black text-center border-2 border-MainGreen-300 leading-10 mx-2 box-content">
                2
            </p>
            <hr className="w-10"/>
            <p className="bg-white h-10 w-10 rounded-full text-lg text-black text-center border-2 border-MainGreen-300 leading-10 mx-2 box-content">
                3
            </p>
            <hr className="w-10"/>
            <p className="bg-white h-10 w-10 rounded-full text-lg text-black text-center border-2 border-MainGreen-300 leading-10 mx-2 box-content">
                4
            </p>
        </nav>
    );
};