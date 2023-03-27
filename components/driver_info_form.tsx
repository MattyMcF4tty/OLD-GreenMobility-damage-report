import { trace } from 'console';
import React, {useEffect, useState} from 'react';
import AccidentInfoForm from './accident_info_form';
import InputField from './inputfield';


//TODO: Make SSN, DLN and phone number to numbers only variables
export class driverInformation{
    firstName:String;
    lastName:String;
    address:String;
    socialSecurityNumber:String;
    drivingLicenseNumber:String;
    phoneNumber:String;
    email:String;
};

export default function DriverInformationForm() {
    const [driverInfo, setDriverInfo] = useState(new driverInformation());


    const OnChange = (event) => {
        const { id, value } = event.target;
        setDriverInfo({ ...driverInfo, [id]: value });
    }

    useEffect(() => {
        localStorage.setItem("LocalDriverInformation", JSON.stringify(driverInfo));
    }, [driverInfo])

    return (
        <div className='flex flex-col border-2 border-MainGreen-200 p-3'>
            <InputField 
            id={"firstName"} 
            type={"text"} 
            labelText={"Drivers First Name"}
            required={true}
            value={driverInfo.firstName}
            onChange={driverInfo.firstName}
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
    );
};