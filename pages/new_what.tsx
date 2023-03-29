import React, {useEffect, useState} from "react";
import Inputfield from "../components/custom_inputfield";
import DriverInfoForm, {driverInformation} from "../components/whatPage/driver_information_form";
import YesNo from "../components/yes_no_checkbox";

export default function What() {
    const [GreenCarNumberPlate, setGreenCarNumberPlate] = useState<string>();
    const [showDriverInfoForm, setShowDriverInfoForm] = useState<boolean>(false);
    const [driverInfo, setDriverInfo] = useState<driverInformation>()

    useEffect(() => {
        console.log(driverInfo)
    }, [driverInfo]);
    
    return (
        <div>
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
                
            </div>
        </div>
    );
};