import { Console } from "console";
import React, {useState} from "react";
import InputField from "../components/inputfield";

class driverInformation{
    firstName:String;
    lastName:String;
    address:String;
    socialSecurityNumber:Number;
    drivingLicenseNumber:Number;
    phoneNumber:Number;
    email:String;
};

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
    const [isChecked, setIsChecked] = useState(true); 
    const [driverInfo, setDriverInfo] = useState(new driverInformation());
    const [accidentInfo, setAccidentInfo] = useState(new accidentInformation());


    
    const OnChange = (event) => {
        const { id, value } = event.target;
        setDriverInfo({ ...driverInfo, [id]: value });
        setAccidentInfo({...accidentInfo, [id]: value});
    }

    function handleWhatPageSubmission() {
    console.log(driverInfo, accidentInfo)
    };

    return(
        <div>
            <form>
                {/* Car number plate collection */}
                <InputField 
                id={"carNumberPlate"} 
                type={"text"} 
                labelText={"GreenMobility cars number plate"}
                required={true}
                value={accidentInfo.carNumberPlate}
                onChange={OnChange}
                maxLength={50}
                />

                {/* Driver Information Collection */}
                <input type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)}/>
                {!isChecked &&
                    <div className="flex flex-col">
                        <InputField 
                        id={"firstName"} 
                        type={"text"} 
                        labelText={"Drivers First Name"}
                        required={true}
                        value={driverInfo.firstName}
                        onChange={OnChange}
                        maxLength={50}
                        />

                        <InputField 
                        id={"lastName"} 
                        type={"text"} 
                        labelText={"Drivers Last Name"}
                        required={true}
                        value={driverInfo.lastName}
                        onChange={OnChange}
                        maxLength={50}
                        />

                        {/* TODO: Gør så man kan udfylde addressen med google */}
                        {/* TODO: Sørg for at det bliver gemt i så by, vej osv bliver gemt i sit eget variabel */}
                        <InputField 
                        id={"address"} 
                        type={"text"} 
                        labelText={"Drivers Address"}
                        required={true}
                        value={driverInfo.address}
                        onChange={OnChange}
                        maxLength={50}
                        />

                        <InputField 
                        id={"socialSecurityNumber"} 
                        type={"number"} 
                        labelText={"Drivers Social Security Number"}
                        required={true}
                        value={driverInfo.socialSecurityNumber}
                        onChange={OnChange}
                        maxLength={50}
                        />

                        <InputField 
                        id={"drivingLicenseNumber"} 
                        type={"number"} 
                        labelText={"Drivers Driving License Number"}
                        required={true}
                        value={driverInfo.drivingLicenseNumber}
                        onChange={OnChange}
                        maxLength={50}
                        />

                        <InputField 
                        id={"phoneNumber"} 
                        type={"number"} 
                        labelText={"Drivers Phone Number"}
                        required={true}
                        value={driverInfo.phoneNumber}
                        onChange={OnChange}
                        maxLength={50}
                        />

                        <InputField 
                        id={"email"} 
                        type={"text"} 
                        labelText={"Drivers Email"}
                        required={true}
                        value={driverInfo.email}
                        onChange={OnChange}
                        maxLength={50}
                        />
                    </div>
                }

                {/* Lav en klokkeslæt funktion, så de nemmere kan vælge tidspunkt */}
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
                    <InputField 
                    id={"city"} 
                    type={"text"} 
                    labelText={"City of accident"}
                    required={true}
                    value={accidentInfo.city}
                    onChange={OnChange}
                    maxLength={50}
                    />

                    <InputField 
                    id={"street"} 
                    type={"text"} 
                    labelText={"Street of accident"}
                    required={true}
                    value={accidentInfo.street}
                    onChange={OnChange}
                    maxLength={50}
                    />

                    <InputField 
                    id={"streetNumber"} 
                    type={"text"} 
                    labelText={"Street number of accident"}
                    required={true}
                    value={accidentInfo.streetNumber}
                    onChange={OnChange}
                    maxLength={50}
                    />

                    <InputField 
                    id={"zipCode"} 
                    type={"number"} 
                    labelText={"Zip code of accident"}
                    required={true}
                    value={accidentInfo.zipCode}
                    onChange={OnChange}
                    maxLength={50}
                    />
                </div>
                <button onClick={handleWhatPageSubmission}>Hejsa</button>
            </form>
        </div>
    );
}

export default WhatPage;