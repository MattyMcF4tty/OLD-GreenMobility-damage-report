import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PhoneNumber from "./phone_form";
class oppositeCarInformation {
  numberplate: string;
  model: string;
  color: string;
  fullName: string;
  phoneNumber: number;
  Email: string;
  drivingLicenseNumber: number;
  insurance: string;
}
function Car() {
  const [value, setValue] = useState();
  return (
    <div className="flex flex-col">
      <label htmlFor="collisionCar">Nummerplade på modparts køretøj</label>
      <input type="text" className="border-2 border-black rounded-lg" />
      <label htmlFor="collisionCar">Model og farve på køretøj</label>
      <input type="text" className="border-2 border-black rounded-lg" />
      <label htmlFor="collisionCar">Modparts fulde navn</label>
      <input type="text" className="border-2 border-black rounded-lg" />
      <label htmlFor="collisionCar">Modparts tlf. nr.</label>
      <PhoneNumber />
      <label htmlFor="collisionCar">Email</label>
      <input type="email" className="border-2 border-black rounded-lg" />
      <label htmlFor="collisionCar">Kørekort nr.</label>
      <input type="text" className="border-2 border-black rounded-lg" />
      <label htmlFor="collisionCar">Forsikring</label>
      <input type="text" className="border-2 border-black rounded-lg" />
    </div>
  );
}

export default Car;
