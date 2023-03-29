import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";
import Text from "../textarea";

class oppositeBikeInformation {
  ebike: boolean;
  personDamage: boolean;
  name: string;
  phoneNumber: number;
  Email: string;
}

function Bike() {
  const [isEbikeChecked, setIsEbikeChecked] = useState<0 | 1 | 2>(0);
  const [isPersonDamageChecked, setIsPersonDamageChecked] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <label htmlFor="Ebike">er det en elcykel?</label>
      <div className="flex flex-row">
        <input
          className=""
          type="checkbox"
          id="Ebike"
          checked={isEbikeChecked === 1}
          onChange={(event) => setIsEbikeChecked(1)}
        />
        <p>ja</p>
        <input
          className=""
          type="checkbox"
          id="Ebike"
          checked={isEbikeChecked === 2}
          onChange={(event) => setIsEbikeChecked(2)}
        />
        <p>nej</p>
      </div>
      {isEbikeChecked === 1 && (
        <div className="flex flex-col">
          <label htmlFor="Ebike">Navn på modpart</label>
          <input
            type="text"
            className="border-2 border-black rounded-lg"
            id="Ebike"
          />
          <label htmlFor="Ebike">Tlf nr.</label>
          <input
            type="text"
            className="border-2 border-black rounded-lg"
            id="Ebike"
          />
          <label htmlFor="Ebike">E-mail</label>
          <input
            type="text"
            className="border-2 border-black rounded-lg"
            id="Ebike"
          />
        </div>
      )}
      {!isEbikeChecked && (
        <div className="flex flex-col">
          <label htmlFor="Ebike">Navn på modpart</label>
          <input
            type="text"
            className="border-2 border-black rounded-lg"
            id="Ebike"
          />
          <label htmlFor="Ebike">Tlf nr.</label>
          <input
            type="text"
            className="border-2 border-black rounded-lg"
            id="Ebike"
          />
          <label htmlFor="Ebike">E-mail</label>
          <input
            type="text"
            className="border-2 border-black rounded-lg"
            id="Ebike"
          />
        </div>
      )}
    </div>
  );
}

export default Bike;
