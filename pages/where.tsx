import React, { useState, useRef, useEffect } from "react";
import Bike from "../components/opposite_information/bike_information_form";
import Text from "../components/textarea";
import Car from "../components/opposite_information/car_information_form";
import Person from "../components/opposite_information/person_information_form";
import YesNo from "../components/yes_no_checkbox";
import Inputfield from "../components/custom_inputfield";
import Checkbox from "../components/custom_checkbox";
import Other from "../components/opposite_information/other_information_form";

function WherePage() {
  const [isVehicleChecked, setIsVehicleChecked] = useState(false);
  const [isCarChecked, setIsCarChecked] = useState(false);
  const [isBikeChecked, setIsBikeChecked] = useState(false);
  const [isPersonChecked, setIsPersonChecked] = useState(false);
  const [isOtherChecked, setIsOtherChecked] = useState(false);
  const [isPersonDamageChecked, setIsPersonDamageChecked] = useState(false);

  return (
    <form className="flex flex-col items-start">
      <div>
        <YesNo
          id="whatvehicle"
          labelText="Collision with another vehicle/person?"
          onChange={setIsVehicleChecked}
        />
      </div>
      {isVehicleChecked && (
        <div>
          <label htmlFor="whatvehicle">Hvad for et køretøj?</label>
          <div id="whatvehicle" className="flex flex-row">
            <Checkbox
              id="vehicleCar"
              labelText="Car"
              onChange={setIsCarChecked}
            />
            <Checkbox
              id="vehicleBike"
              labelText="Bike"
              onChange={setIsBikeChecked}
            />
            <Checkbox
              id="vehiclePerson"
              labelText="Pedestrian"
              onChange={setIsPersonChecked}
            />
            <Checkbox
              id="vehicleOther"
              labelText="Other"
              onChange={setIsOtherChecked}
            />
          </div>
        </div>
      )}
      {isCarChecked && <Car />}

      {isBikeChecked && <Bike />}

      {isPersonChecked && <Person />}

      {isOtherChecked && <Other />}

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
