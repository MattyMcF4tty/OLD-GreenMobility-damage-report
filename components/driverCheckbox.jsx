import React, { useState } from "react";

function DriverCheckbox () {
    const [isChecked, setIsChecked] = useState(false);
    let abc = "hello";
 
    if (isChecked) {
        abc="<h1> fuck u <h1>";
    }else {
        abc="<h1> oiprjgpoaeirjgr u <h1>";
    }

    return (
        <div>
            <input id="DriverCheckbox" type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)} />
            {isChecked (<div className=""><h1>hejsa</h1></div> )
            
            
            }
        </div>
    );
}

export default DriverCheckbox;