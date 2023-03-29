import { Console } from "console";
import React, {useState, useEffect} from "react";
import InputField from "../components/OldComponents/inputfield";
import DriverInformationForm from '../components/OldComponents/driver_info_form';
import AccidentLocationMap from '../components/accident_location_map'
import YesNo from "../components/OldComponents/yes_no_checkbox";

class accidentInformation{
    time:string;
    day:string;
    month:string;
    year:string;
    city:string;
    street:string;
    streetNumber:string;
    zipCode:number;
    carNumberPlate:string;
};



function WhatPage () {
    /* Different data collected */
    const [driverInfoCheckbox, setdriverInfoCheckbox] = useState(Number);
    const [accidentInfo, setAccidentInfo] = useState(new accidentInformation());
    const [greenCarNumberPlate, setGreenCarNumberPlate] = useState(String);

    
    const OnChange = (event) => {
        const { id, value } = event.target;
        setAccidentInfo({...accidentInfo, [id]: value});
    }

    useEffect(() => {
        localStorage.setItem("GreenCarNumberPlate", greenCarNumberPlate)
    }, [greenCarNumberPlate])
    
    return(
        <div className="p-4">
            <form className="flex flex-col">

                {/* TODO: Check on det der skrives faktisk er en real green nummerplade */}
                {/* Car number plate collection */}
                <InputField 
                id={"carNumberPlate"} 
                type={"text"} 
                labelText={"GreenMobility cars number plate"}
                required={true}
                value={greenCarNumberPlate}
                onChange={(event) => setGreenCarNumberPlate(event.target.value)}
                maxLength={50}
                />

                {/* Driver Information Collection */}
                <label htmlFor="">Was driver and renter the same person?</label>
                <YesNo id={"driverInfoCheckbox"} isChecked={driverInfoCheckbox} onChange={setdriverInfoCheckbox}/>
                {!driverInfoCheckbox &&
                    <DriverInformationForm />
                }

                {/* TODO: Lav en klokkeslæt funktion, så de nemmere kan vælge tidspunkt */}
                {/* Accident Date Collection */}
                <div className="flex flex-row h-30">
                    <div className="
                    mr-[3%]
                    ">
                        <InputField 
                        id={"time"} 
                        type={"time"} 
                        labelText={"Time of accident"}
                        required={true}
                        value={accidentInfo.time}
                        onChange={OnChange}
                        maxLength={50}
                        />
                    </div>


                    <InputField 
                    id={"day"} 
                    type={"date"} 
                    labelText={"Day of accident"}
                    required={true}
                    value={accidentInfo.day}
                    onChange={OnChange}
                    maxLength={50}
                    />
                </div>

                {/* TODO: Make google help user with autofil of location */}
                {/* Accident location collection */}
                <div>
                    <AccidentLocationMap />
                </div>
                <button>Hejsa</button>
            </form>
        </div>
    );
}

export default WhatPage;