import React, { useState } from "react";

function Text() {
  const [val, setVal] = useState("");
  let textMax = 500;
  let currentTextCount = val.length;
  let remainingCharacters = textMax;

  function Counter() {
    remainingCharacters = textMax - currentTextCount;
  }

  const change = (event) => {
    setVal(event.target.value);
  };
  return (
    <div className="Text">
      <textarea
        onChange={change}
        value={val}
        maxLength={textMax}
        placeholder="Skriv noget her"
        className="resize-none border-2 border-black rounded-lg px-1"
      />
      <p className="px-1">
        {currentTextCount}/{textMax}
      </p>
    </div>
  );
}

export default Text;
