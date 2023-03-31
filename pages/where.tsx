import React, { useState, useRef, useEffect } from "react";
import Bike from "../components/opposite_information/bike_information_form";
import Text from "../components/textarea";
import Car from "../components/opposite_information/car_information_form";
import Person from "../components/opposite_information/person_information_form";
import { YesNo, Inputfield } from "../components/custom_inputfields";
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
    <form className="flex flex-col items-start w-full h-full">
      <div className="w-full">
        <YesNo
          id="whatvehicle"
          labelText="Collision with another vehicle/person?"
          onChange={setIsVehicleChecked}
        />
      </div>
      {isVehicleChecked && (
        <div className="flex justify-center text-center w-full">
          <div id="whatvehicle" className="flex flex-col">
            <div>
              <label htmlFor="whatvehicle">Hvad for et køretøj?</label>
            </div>
            <div className="flex flex-row">
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
        </div>
      )}
      {isCarChecked && <Car />}

      {isBikeChecked && <Bike />}

      {isPersonChecked && <Person />}

      {isOtherChecked && <Other />}

      <div className="flex flex-col justify-center">
        <YesNo
          id="personDamage"
          labelText="Person damage?"
          onChange={setIsPersonDamageChecked}
        />
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
