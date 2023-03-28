import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";

class oppositeBikeInformation{
    ebike:boolean;
    personDamage:boolean;
    name:string;
    phoneNumber:number;
    Email:string;
}

function Bike(){

    const [isEbikeChecked, setIsEbikeChecked] = useState(false);
    const [isPersonDamageChecked, setIsPersonDamageChecked] = useState(false);

    return(
    <div className="flex flex-col items-start">
        <label htmlFor="Ebike">er det en elcykel?</label>
        <div className="flex flex-row">
        <input className="" type="checkbox" id="Ebike" checked={isEbikeChecked} onChange={(event) => setIsEbikeChecked(true)}/>
        <p>ja</p>
        <input className="" type="checkbox" id="Ebike" checked={!isEbikeChecked} onChange={(event) => setIsEbikeChecked(false)}/>
        <p>nej</p>
        </div>
        
    </div>
    );
}

export default Bike