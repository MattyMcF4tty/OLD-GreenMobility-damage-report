import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";
import { YesNo } from "../custom_inputfields";

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
      <div className="mt-5">
        <YesNo
          id="Ebike"
          labelText="Is it an electric bike?"
          onChange={setIsEbikeChecked}
        />
      </div>
      {isEbikeChecked && (
        <div className="flex flex-col bg-MainGreen-100 rounded-lg shadow-lg">
          <label htmlFor="Ebike">Navn på modpart</label>
          <input type="text" className="bg-MainGreen-100" id="Ebike" />
          <label htmlFor="Ebike">Tlf nr.</label>
          <input type="text" className="bg-MainGreen-100" id="Ebike" />
          <label htmlFor="Ebike">E-mail</label>
          <input type="text" className="bg-MainGreen-100" id="Ebike" />
        </div>
      )}
      {!isEbikeChecked && (
        <div className="flex flex-col bg-MainGreen-100 rounded-lg shadow-lg">
          <label htmlFor="Ebike">Navn på modpart</label>
          <input type="text" className="bg-MainGreen-100" id="Ebike" />
          <label htmlFor="Ebike">Tlf nr.</label>
          <input type="text" className="bg-MainGreen-100" id="Ebike" />
          <label htmlFor="Ebike">E-mail</label>
          <input type="text" className="bg-MainGreen-100" id="Ebike" />
        </div>
      )}
    </div>
  );
}

export default Bike;
