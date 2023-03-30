import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";
import PhoneNumber from "./phone_form";

class oppositePersonInformation {
  name: string;
  phoneNumber: number;
  Email: string;
  personDamage: string;
}

function Person() {
  return (
    <div className="flex flex-col">
      <label htmlFor="person">Navn på person</label>
      <input type="text" className="border-2 border-black rounded-lg" />
      <label htmlFor="personNumber">Telefon nr. på person</label>
      <PhoneNumber />
      <label htmlFor="person">E-mail</label>
      <input type="text" className="border-2 border-black rounded-lg" />
    </div>
  );
}

export default Person;
