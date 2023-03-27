import { Console } from "console";
import React, {useState, useEffect} from "react";
import InputField from "../components/inputfield";
import DriverInformationForm from '../components/driver_info_form';
import AccidentLocationMap from '../components/accident_location_map'

class accidentInformation{
    time:String;
    day:String;
    month:String;
    year:String;
    city:String;
    street:String;
    streetNumber:String;
    zipCode:Number;
    carNumberPlate:String;
};



function WhatPage () {
    /* Different data collected */
    const [driverInfoCheckbox, setDriverInfoCheckbox] = useState(true); 
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
        <div>
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
                <div id="DriverInfoCheckbox">
                    <label htmlFor="Yes" >Yes</label>
                    <input className="mr-3"
                    id="Yes" type="checkbox" checked={driverInfoCheckbox} onChange={() => setDriverInfoCheckbox(true)}/>
                    
                    <label htmlFor="No">No</label>
                    <input id="No" type="checkbox" checked={!driverInfoCheckbox} onChange={() => setDriverInfoCheckbox(false)}/>
                </div>
                {!driverInfoCheckbox &&
                    <DriverInformationForm />
                }

                {/* TODO: Lav en klokkeslæt funktion, så de nemmere kan vælge tidspunkt */}
                {/* Accident Date Collection */}
                <div>
                    <InputField 
                    id={"time"} 
                    type={"text"} 
                    labelText={"Time of accident"}
                    required={true}
                    value={accidentInfo.time}
                    onChange={OnChange}
                    maxLength={50}
                    />

                    <InputField 
                    id={"day"} 
                    type={"text"} 
                    labelText={"Day of accident"}
                    required={true}
                    value={accidentInfo.day}
                    onChange={OnChange}
                    maxLength={50}
                    />

                    <InputField 
                    id={"month"} 
                    type={"text"} 
                    labelText={"Month of accident"}
                    required={true}
                    value={accidentInfo.month}
                    onChange={OnChange}
                    maxLength={50}
                    />

                    <InputField 
                    id={"year"} 
                    type={"text"} 
                    labelText={"Year of accident"}
                    required={true}
                    value={accidentInfo.year}
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