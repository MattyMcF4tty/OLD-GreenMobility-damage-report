import React, {useRef, useState} from "react";
import * as logic from "../logic/whatPageLogic";

const whatPageInfo = new logic.whatPageInformation;
const driverInfo = new logic.driverInformation;




function handleWhatPageSubmit(whatPageInfo:whatPageInformation, greenCarNumberplate:String, driverInfo:driverInformation, locationInfo:locationInformation, dateInfo:dateInformation){

}


function WhatPage () {
    //TODO: Fix det her, så der ikke så mange variabler hvis muligt
    //TODO: Fix så de ikke er possibly undefined
    //TODO: Make it possible to access whatPageInfo from another page
    const [isChecked, setIsChecked] = useState(true); 
    const driverFirstName = useRef().current.value;
    const driverLastName = useRef().current;
    const driverAddress = useRef().current;
    const driverSocialSecurityNumber = useRef().current;
    const driverDrivingLicenseNumber = useRef().current;
    const driverPhoneNumber = useRef().current;
    const driverEmail = useRef().current;
    const greenCarNumberplate = useRef().current;




    return (
        <form className="flex flex-col">
            <label htmlFor="numberplate">Numberplate of GreenMobility Car</label>
            <input id="numberplate" type="text" ref={greenCarNumberplate} />

            <input type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)}/>
            {!isChecked &&
                <div id="driverInformation" className="flex flex-col">
                    <p>Driver Information</p>
                    <label htmlFor="firstName">First Name</label>
                    <input required={true} ref={driverFirstName} id="firstName" type="text" />

                    <label htmlFor="lastName">Last Name</label>
                    <input ref={driverLastName} id="lastName" type="text" />

                    {/* TODO: google maps integration, så den udfylder sammen med brugeren */}
                    <label htmlFor="address">Address</label>
                    <input ref={driverAddress} id="address" type="text" />

                    <label htmlFor="socialSecurityNumber">Social Security Number</label>
                    <input ref={driverSocialSecurityNumber} id="socialSecurityNumber" type="number" />

                    <label htmlFor="drivingLicenseNumber">Driving License Number</label>
                    <input ref={driverDrivingLicenseNumber} id="drivingLicenseNumber" type="number" />

                    <label htmlFor="phoneNumber">Phone number</label>
                    <input ref={driverPhoneNumber} id="phoneNumber" type="number" />

                    <label htmlFor="email">Email</label>
                    <input ref={driverEmail} id="email" type="text" />
                </div>
            }

            <button type="submit" onClick={handleWhatPageSubmit()}>Click</button>
        </form>
        
    );
};

export default WhatPage;
