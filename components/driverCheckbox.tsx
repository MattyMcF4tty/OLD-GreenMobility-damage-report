import React, { useState, useRef, useEffect } from "react";

class driverInformation{
    firstName:String;
    lastName:String;
    address:String;
    socialSecurityNumber:String;
    drivingLicenseNumber:String;
    phoneNumber:String;
    email:String;
}

export const driverInfo = new driverInformation();
const LOCAL_STORAGE_KEY = "DriverInformationStorage"

/* TODO: Skal gøres kortere */
/* TODO: DriverInfo skal gemmes lokalt så den ikke bliver mistet når man reloader siden eller går til en anden side */
/*Måske er det ikke nødvendigt at gøre dette til en component*/
function DriverCheckbox () {
    const [isChecked, setIsChecked] = useState(true);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const socialSecurityNumberRef = useRef();
    const drivingLicenseNumberRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(driverInfo))
    }, [driverInfo] )

    function handleDriverInfo() {
        if (isChecked) {
            console.log("Get driver information from server")
        } else {
            /* TODO: FIX det her skrald */
            driverInfo.firstName = firstNameRef.current.value;
            driverInfo.lastName = lastNameRef.current.value;
            driverInfo.address = addressRef.current.value;
            driverInfo.socialSecurityNumber = socialSecurityNumberRef.current.value;
            driverInfo.drivingLicenseNumber = drivingLicenseNumberRef.current.value;
            driverInfo.phoneNumber = phoneNumberRef.current.value;
            driverInfo.email = emailRef.current.value;
            console.log(driverInfo)
            
        }
    }


    return (
        <div>
            <input id="driverCheckbox" type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)} />
            <label className="ml-2" htmlFor="driverCheckbox">Was renter and driver the same person?</label>
            {!isChecked && 
            <div id="driverInformation" className="flex flex-col">
                <p>Driver Information</p>
                <label htmlFor="firstName">First Name</label>
                <input ref={firstNameRef} id="firstName" type="text" />

                <label htmlFor="lastName">Last Name</label>
                <input ref={lastNameRef} id="lastName" type="text" />

                {/* TODO: google maps integration, så den udfylder sammen med brugeren */}
                <label htmlFor="address">Address</label>
                <input ref={addressRef} id="address" type="text" />

                <label htmlFor="socialSecurityNumber">Social Security Number</label>
                <input ref={socialSecurityNumberRef} id="socialSecurityNumber" type="number" />

                <label htmlFor="drivingLicenseNumber">Driving License Number</label>
                <input ref={drivingLicenseNumberRef} id="drivingLicenseNumber" type="number" />

                <label htmlFor="phoneNumber">Phone number</label>
                <input ref={phoneNumberRef} id="phoneNumber" type="number" />

                <label htmlFor="email">Email</label>
                <input ref={emailRef} id="email" type="text" />

            </div>}

            <button type="submit" onClick={handleDriverInfo}>Click me</button>

        </div>
    );
}

export default DriverCheckbox;