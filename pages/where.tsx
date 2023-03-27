import React, { useState, useRef, useEffect } from "react";


function WherePage () {
    const [isCarChecked, setIsCarChecked] = useState(false);

    return(
    <form className="flex flex-col items-start">
        <label htmlFor="collisionCar">Sammenstød med andet køretøj?</label>
        <div className="flex flex-row">
        <input className="" type="checkbox" id="collisionCar" checked={isCarChecked} onChange={(event) => setIsCarChecked(event.target.checked)}/>
        <p>ja</p>
        <input className="" type="checkbox" id="collisionCar" checked={isCarChecked} onChange={(event) => setIsCarChecked(event.target.checked)}/>
        <p>nej</p>
        </div>
        {isCarChecked &&
        <div>
            <label htmlFor="Plate">Nummerplade på modpart </label>
            <input type="text" id="Plate" className="border-[1px] h-5 px-1 border-black rounded-lg"/>
        </div>
        }
    </form>
    );
};

export default WherePage;