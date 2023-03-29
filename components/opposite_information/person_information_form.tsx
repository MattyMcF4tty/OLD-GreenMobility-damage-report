import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";

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
      <input type="text" />
    </div>
  );
}

export default Person;
