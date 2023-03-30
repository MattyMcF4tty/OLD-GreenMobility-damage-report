import React, {useEffect, useState} from "react";
import {Inputfield, TimeDateField, YesNo, LocationField} from "../components/custom_inputfields";
import DriverInfoForm, {driverInformation} from "../components/whatPage/driver_information_form";

export default function What() {
    const [greenCarNumberplate, setgreenCarNumberplate] = useState<string>("");
    const [showDriverInfoForm, setShowDriverInfoForm] = useState<boolean>(false);
    const [accidentTime, setAccidentTime] = useState<string>("");
    const [accidentDate, setAccidentDate] = useState<string>("");
    const [accidentLocation, setAccidentLocation] = useState<{ lat: number; lng: number }>();


    const [driverInfo, setDriverInfo] = useState<driverInformation>()

    useEffect(() => {
        localStorage.setItem("greenCarNumberplate", greenCarNumberplate)
        localStorage.setItem("accidentTime", accidentTime)
        localStorage.setItem("accidentDate", accidentDate)
        localStorage.setItem("accidentLocation", JSON.stringify(accidentLocation))
    }, [driverInfo, accidentLocation, accidentTime, accidentDate]);
    
    return (
        <form className="p-4 w-full">
            {/* GreenMobility car numberplate collection */}
            <div>
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
            <div className="w-full h-80 mb-14">
                <LocationField 
                id="accidentLocation"
                labelText="Mark or write where the accident took place"
                onMoveCoords={setAccidentLocation}
                />
            </div>
            <div className="flex flex-row w-full place-content-between h-10">
                <button disabled={true} className="w-2/5 border-2 border-black text-black">Previous</button>
                <button className="w-2/5 bg-MainGreen-300 text-white">Next</button>
            </div>
        </form>
    );
};