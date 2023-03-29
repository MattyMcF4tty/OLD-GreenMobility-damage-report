import React, { useEffect, useState } from "react";
import { Inputfield } from "../custom_inputfields";

export class driverInformation{
    firstName:string;
    lastName:string;
    address:string;
    socialSecurityNumber:string;
    drivingLicenseNumber:string;
    phoneNumber:string;
    email:string;
}

interface DriverInfoFormProps {
    onchange: (driverInfo: driverInformation) => void;
}

export default function DriverInfoForm(props: DriverInfoFormProps) {
    const { onchange } = props;
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [socialSecurityNumber, setSocialSecurityNumber] = useState<string>();
    const [drivingLicenseNumber, setDrivingLicenseNumber] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [email, setEmail] = useState<string>();

    const [driverInfo, setDriverInfo] = useState<driverInformation>()

    useEffect(() => {
        const newDriverInfo = new driverInformation();
        newDriverInfo.firstName = firstName;
        newDriverInfo.lastName = lastName;
        newDriverInfo.address = address;
        newDriverInfo.socialSecurityNumber = socialSecurityNumber;
        newDriverInfo.drivingLicenseNumber = drivingLicenseNumber;
        newDriverInfo.phoneNumber = phoneNumber;
        newDriverInfo.email = email;
    
        setDriverInfo(newDriverInfo);
      }, [
        firstName,
        lastName,
        address,
        socialSecurityNumber,
        drivingLicenseNumber,
        phoneNumber,
        email,
      ]);
    
      useEffect(() => {
        onchange(driverInfo);
      }, [driverInfo, onchange]);

    return (
        <div className="flex flex-col">
            <Inputfield
                labelText = "Drivers first name"
                id="FirstNameInput"
                required={true}
                type="text"
                onChange={setFirstName}
            />

            <Inputfield
                labelText = "Drivers last name"
                id="LastNameInput"
                required={true}
                type="text"
                onChange={setLastName}
            />

            {/* TODO: make google autofill */}
            <Inputfield
                labelText = "Drivers address"
                id="AddressInput"
                required={true}
                type="text"
                onChange={setAddress}
            />

            {/* TODO: Check if its a real phone number */}
            <Inputfield
                labelText = "Drivers social security number"
                id="SocialSecurityNumberInput"
                required={true}
                type="number"
                onChange={setSocialSecurityNumber}
            />

            {/* TODO: Check if its a real phone number */}
            <Inputfield
                labelText = "Drivers driving license number"
                id="DrivingLicenseNumberInput"
                required={true}
                type="number"
                onChange={setDrivingLicenseNumber}
            />

            {/* TODO: Check if its a real phone number */}
            <Inputfield
                labelText = "Drivers phone number"
                id="PhoneNumberInput"
                required={true}
                type="number"
                onChange={setPhoneNumber}
            />

            {/* TODO: Check if its a real email */}
            <Inputfield
                labelText = "Drivers email"
                id="FirstNameInput"
                required={true}
                type="text"
                onChange={setEmail}
            />
        </div>
    );
;}