import React, {useRef} from "react";


function WhatPage () {
    const numberplate = useRef()

    return (
        <div className="flex flex-col">
        <label htmlFor="numberplate">Numberplate of GreenMobility Car</label>
        <input id="numberplate" type="text" ref={numberplate} />

    </div>
    );
};

export default WhatPage;
