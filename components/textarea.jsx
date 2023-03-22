import React, { useState } from "react";

function Text(){
    const [val, setVal] = useState("")
    let textMax = 500;
    let currentTextCount = val.length;
    let remainingCharacters = textMax;

    function Counter () {
        remainingCharacters = textMax - currentTextCount
    }

    const change = event => {
        setVal(event.target.value)
    }
    return(
        <div className="Text">
            <textarea onChange={change} value = {val} maxLength={textMax} placeholder="Skriv noget her" className="resize-none"/>
            <p>{currentTextCount}/{textMax}</p>
        </div>
    )
}


/* function Textarea (){
    let textMax = 500;
    let currentTextCount = 0;
    let remainingCharacters = textMax;

    function CharacterCounter (){
        remainingCharacters = textMax - currentTextCount;
    }
    

    return(
        <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-white">SKRIV LA</label>
            <textarea id="message" maxLength={textMax} rows={4} className="resize-none block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SKRIV"></textarea>
            <p >{currentTextCount}/{textMax}</p>
        
        </div>
    )
} */

export default Text;