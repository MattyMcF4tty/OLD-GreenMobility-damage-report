import React, {useEffect, useState} from "react";
import {Inputfield, TimeDateField, YesNo, LocationField} from "../components/custom_inputfields";
import { NavButtons } from "../components/navigation";
import DriverInfoForm, {driverInformation} from "../components/whatPage/driver_information_form";

export default function What() {
    const [greenCarNumberplate, setgreenCarNumberplate] = useState<string>("");
    const [showDriverInfoForm, setShowDriverInfoForm] = useState<boolean>(false);
    const [accidentTime, setAccidentTime] = useState<string>("");
    const [accidentDate, setAccidentDate] = useState<string>("");
    const [accidentLocation, setAccidentLocation] = useState<{ lat: number; lng: number }>();


    const [driverInfo, setDriverInfo] = useState<driverInformation>()

    useEffect(() => {
        sessionStorage.setItem("greenCarNumberplate", greenCarNumberplate)
        sessionStorage.setItem("accidentTime", accidentTime)
        sessionStorage.setItem("accidentDate", accidentDate)
        sessionStorage.setItem("accidentLocation", JSON.stringify(accidentLocation))
    }, [greenCarNumberplate, driverInfo, accidentLocation, accidentTime, accidentDate]);
    
    return (
        <form className="w-full">
            {/* GreenMobility car numberplate collection */}
            <div>
            {/* TODO: Make it so you can only type a valid numberplate for the country where the accident took place */}
                <Inputfield 
                    labelText="Numberplate of GreenMobility car"
                    id = "greenCarNumberplateInput"
                    type = {"text"}
                    required={true}
                    onChange={setgreenCarNumberplate}
                />
            </div>
            
            {/* Driver information collection */}
            <div className="">
                <YesNo 
                    labelText="Was driver and renter the same person?"
                    id="ShowDriverInfoForm"
                    required={true}
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
            <div className="w-full h-80">
                <LocationField 
                id="accidentLocation"
                labelText="Mark where the accident took place"
                onMoveCoords={setAccidentLocation}
                />
            </div>
        </form>
    );
};