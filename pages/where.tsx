import React, { useState, useRef, useEffect } from "react";
import Bike from "../components/opposite_information/bike_information_form";
import Text from "../components/textarea";
import Car from "../components/opposite_information/car_information_form";
import Person from "../components/opposite_information/person_information_form";

function WherePage() {
  const [isVehicleChecked, setIsVehicleChecked] = useState(false);
  const [isCarChecked, setIsCarChecked] = useState(false);
  const [isBikeChecked, setIsBikeChecked] = useState(false);
  const [isPersonChecked, setIsPersonChecked] = useState(false);
  const [isOtherChecked, setIsOtherChecked] = useState(false);
  const [isPersonDamageChecked, setIsPersonDamageChecked] = useState(false);

  return (
    <form className="flex flex-col items-start">
      <label htmlFor="collisionCar">Sammenstød med andet køretøj?</label>
      <div className="flex flex-row">
        <input
          className=""
          type="checkbox"
          id="collisionCar"
          checked={isVehicleChecked}
          onChange={(event) => setIsVehicleChecked(true)}
        />
        <p>ja</p>
        <input
          className=""
          type="checkbox"
          id="collisionCar"
          checked={!isVehicleChecked}
          onChange={(event) => setIsVehicleChecked(false)}
        />
        <p>nej</p>
      </div>
      {isVehicleChecked && (
        <div>
          <label htmlFor="whatvehicle">Hvad for et køretøj?</label>
          <div className="flex flex-row">
            <input
              className=""
              type="checkbox"
              id="whatvehicle"
              checked={isCarChecked}
              onChange={(event) => setIsCarChecked(event.target.checked)}
            />
            <p>bil</p>
            <input
              className=""
              type="checkbox"
              id="whatvehicle"
              checked={isBikeChecked}
              onChange={(event) => setIsBikeChecked(event.target.checked)}
            />
            <p>cykel</p>
            <input
              className=""
              type="checkbox"
              id="person"
              checked={isPersonChecked}
              onChange={(event) => setIsPersonChecked(event.target.checked)}
            />
            <p>fodgænger</p>
            <input type="checkbox" name="" id="other" />
            <p>andet</p>
          </div>
        </div>
      )}
      {isCarChecked && <Car />}

      {isBikeChecked && <Bike />}

      {isPersonChecked && <Person />}

      <div>
        <label htmlFor="persondamage">Personskade?</label>
        <div className="flex flex-row">
          <input
            className=""
            type="checkbox"
            id="persondamage"
            checked={isPersonDamageChecked}
            onChange={(event) => setIsPersonDamageChecked(true)}
          />
          <p>ja</p>
          <input
            className=""
            type="checkbox"
            id="persondamage"
            checked={!isPersonDamageChecked}
            onChange={(event) => setIsPersonDamageChecked(false)}
          />
          <p>nej</p>
        </div>
      </div>
      {isPersonDamageChecked && (
        <div>
          <Text></Text>
        </div>
      )}
    </form>
  );
}

export default WherePage;
