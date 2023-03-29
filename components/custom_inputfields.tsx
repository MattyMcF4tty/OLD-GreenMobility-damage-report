import { useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api";
import { time } from "console";
import React, { useEffect, useState } from "react";


/* -----Text inputfield------------------------------------------------------------- */
interface InputfieldProps {
    id:string;
    labelText:string;
    required:boolean;
    type: "number" | "text";
    onChange: (isValue:string) => void;
};

export function Inputfield(props: InputfieldProps) {
    const { id, labelText, required, type, onChange } = props;

    const [isValue, setIsValue] = useState<string>("");

    useEffect(() => {
        onChange(isValue);
    }, [isValue]);

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id}>{labelText}</label>
            <input className="bg-MainGreen-100 h-10 text-lg p-1"
                id={id}
                type={type} 
                required={required}
                value={isValue}
                onChange={(event) => setIsValue(event.target.value)}
            />
        </div>
    );
};


/* -----Time and date inputfield---------------------------------------------------- */
interface TimeDateProps {
    id:string;
    labelText:string;
    required:boolean;
    timeChange: (isValue:string) => void;
    dateChange: (isValue:string) => void;
};

export function TimeDateField(props: TimeDateProps) {
    const { id, labelText, required, timeChange, dateChange } = props;

    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        timeChange(time);
        dateChange(date);
    }, [time, date]);


    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id}>{labelText}</label>
            <div id={id} className="flex flex-row">
                <input className="bg-MainGreen-100 h-10 mr-5"
                    id={"Time" + id}
                    type="time"
                    value={time}
                    required={required}
                    onChange={(event) => setTime(event.target.value)}
                />

                <input className="bg-MainGreen-100 h-10"
                    id={"Date" + id}
                    type="date" 
                    value={date}
                    required={required}
                    onChange={(event) => setDate(event.target.value)}
                />
            </div>
        </div>
    );
};


/* -----Yes No checkbox---------------------------------------------------- */
interface YesNoProps {
    id:string;
    labelText:string;
    onChange: (checked: boolean) => void;
}

export function YesNo(props: YesNoProps) {
    const { id, labelText, onChange} = props;

    /* 0 is when the checkbox is first initialized and therefor is not filled, 1 is Yes, 2 is No */
    const [checked, setChecked] = useState< 0 | 1 | 2 >(0);

    useEffect(() => {
        if (checked === 1) {
            onChange(true);
        }
        else if (checked === 2) {
            onChange(false);
        };

    }, [checked]);

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id}>{labelText}</label>

            <div id={id} className="flex flex-row items-center">
                <label htmlFor={"Yes"+id}>Yes</label>
                <input className="accent-MainGreen-300"
                    id={"Yes"+id}
                    type = "checkbox"
                    checked = {checked === 1}
                    onChange = {() => setChecked(1)}
                />

                {/* No  */}
                <label htmlFor={"No"+id}>No</label>
                <input className="accent-MainGreen-300"
                    id={"No"+id}
                    type = "checkbox"
                    checked = {checked === 2}
                    onChange = {() => setChecked(2)}
                />
            </div>
        </div>
    )
};


/* -----Location inputfield---------------------------------------------------- */
interface LocationFieldProps {
    includeMap:boolean;
    labelText:string;
    id:string;
}

export function LocationField(props: LocationFieldProps) {
    const { includeMap, labelText, id } = props;
    const [accidentLocation, setAccidentLocation] = useState({lat: 48.8684, lng: 2.2945});
    const [accidentAddress, setAccidentAddress] = useState<string>("");

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })


    useEffect(() => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setAccidentLocation({ lat: latitude, lng: longitude });
            })
        }
    }, []);
    //TODO: Make typeable and dragable google maps location integration
    if (includeMap){
        return (
            <div className="flex flex-col mb-4">  
                <label htmlFor={id}>{labelText}</label>
                <div id={id}>
                    <input className="bg-MainGreen-100 h-10 rounded-b-none"
                    type="text" 
                    value={accidentAddress}
                    />

                    {isLoaded ? (
                        <GoogleMap
                        mapContainerStyle={{width: '100%', height: '50vh'}}
                        center={accidentLocation}
                        zoom={15}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                        >
                            <Marker 
                            position={accidentLocation} 
                            draggable={true}
                            onDragEnd={(event) => {
                            const newPos = {lat: event.latLng.lat(), lng: event.latLng.lng()};
                            setAccidentLocation(newPos)}}
                            />
                        </GoogleMap>)
                    : (
                        <div>
                            Loading Google Maps...
                        </div>
                    )}

                </div>

            </div>
        );
    };
};
