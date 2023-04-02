import { useJsApiLoader } from "@react-google-maps/api";

/* Google maps loader, returning two booleans that tells if the map has loaded succesfully or not. */
export const loadGoogleMaps = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    return { isLoaded, loadError }
}

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