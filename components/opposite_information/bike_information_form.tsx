import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";
import Text from "../textarea";
import YesNo from "../yes_no_checkbox";

class oppositeBikeInformation {
  ebike: boolean;
  personDamage: boolean;
  name: string;
  phoneNumber: number;
  Email: string;
}

function Bike() {
  const [isEbikeChecked, setIsEbikeChecked] = useState(true);
  const [isPersonDamageChecked, setIsPersonDamageChecked] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <div>
        <YesNo
          id="Ebike"
          labelText="Is it an electric bike?"
          onChange={setIsEbikeChecked}
        />
      </div>
      {isEbikeChecked && (
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
