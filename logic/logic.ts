import { useJsApiLoader } from "@react-google-maps/api";

/* Driver Information Class: The class with all the information we need about the driver of the GreenMobility Car */
export class DriverInformation {
    firstName:string;
    lastName:string;
    address:string;
    socialSecurityNumber:string;
    drivingLicenseNumber:string;
    phoneNumber:string;
    email:string;
};

/* Accident Information Class: The class with all the information we need about the accident */
export class AccidentInformation {
    location: {lat: number, lng: number};
    greenCarNumberPlate: string;
    time: string;
    date: string;
    speed: string;
    crashDescription: string;
    damageDescription: string;
};


/* Witness class: The class with all the information we need about a witness */
export class WitnessInformation {
    name: string;
    phone: string;
    email: string;
};