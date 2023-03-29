import React, {useEffect, useState} from "react";
import {Inputfield, LocationField, TimeDateField, YesNo} from "../components/custom_inputfields";
import DriverInfoForm, {driverInformation} from "../components/whatPage/driver_information_form";

export default function What() {
    const [GreenCarNumberPlate, setGreenCarNumberPlate] = useState<string>("");
    const [showDriverInfoForm, setShowDriverInfoForm] = useState<boolean>(false);
    const [accidentTime, setAccidentTime] = useState<string>("");
    const [accidentDate, setAccidentDate] = useState<string>("");


    const [driverInfo, setDriverInfo] = useState<driverInformation>()

    useEffect(() => {
        console.log(driverInfo)
    }, [driverInfo]);
    
    return (
        <div className="p-4">
            {/* GreenMobility car numberplate collection */}
            <div>
                <Inputfield 
                    labelText="Numberplate of GreenMobility car"
                    id = "GreenCarNumberPlateInput"
                    type = {"text"}
                    required={true}
                    onChange={setGreenCarNumberPlate}
                />
            </div>
            
            {/* Driver information collection */}
            <div className="">
                <YesNo 
                    labelText="Was driver and renter of the GreenMobility car the same person?"
                    id="ShowDriverInfoForm"
                    onChange={setShowDriverInfoForm}
                />

                {showDriverInfoForm &&
                    <DriverInfoForm 
                        onchange={setDriverInfo}
                    />
                }
            </div>

            {/* Accident time and date collection */}
            <div>
                <TimeDateField 
                    labelText="When did the accident occur?"
                    id="Accident"
                    required={true}
                    timeChange={setAccidentTime}
                    dateChange={setAccidentDate}
                />
            </div>

            {/* Accident location collection */}
            <div>
                <LocationField
                    labelText="Where did the accident occur?"
                    includeMap={true}
                    id="accidentLocation"
                />
            </div>
        </div>
    );
};