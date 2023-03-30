import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
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
    timeChange: (Value:string) => void;
    dateChange: (Value:string) => void;
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

            {/* Yes */}
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


/* -----Location Inputfield---------------------------------------------------- */
interface LocationFieldProps {
    id: string;
    labelText: string;
    onMoveCoords: ({lat, lng}: {lat: number, lng: number}) => void;
}

export function LocationField(props: LocationFieldProps) {
    const { id, labelText, onMoveCoords } = props;

    const [markerCoords, setMarkerCoords] = useState<{lat: number, lng: number}>({lat: 55.6843528344547, lng: 12.585598005943817})

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    useEffect(() => {
        onMoveCoords(markerCoords); 
    }, [markerCoords])

    if (loadError) {
        return (
            <div>
                <label htmlFor={id}>{labelText}</label>
                <p id={id}>Error loading Google maps</p>
            </div>
        );
    }
    else if (!isLoaded) {
        return (
            <div>
                <label htmlFor={id}>{labelText}</label>
                <p id={id}>Loading Google maps...</p>
            </div>
        );
    }
    else {
        /* TODO: Maybe make it possible to enter address */
        return ( 
            <div className="w-full h-full">
                <label htmlFor={id}>{labelText}</label>
                <div id={id} className="w-full h-full">
                    <GoogleMap
                    id={"map"+id}
                    center={markerCoords}
                    mapContainerStyle={{
                        height: "100%", 
                        width: "100%"
                    }}
                    zoom={10}
                    options = {{
                        fullscreenControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                    }}
                    >
                        <Marker
                        position={markerCoords}
                        draggable={true}
                        onDragEnd={(event) => setMarkerCoords({ lat: event.latLng.lat(), lng: event.latLng.lng() })}
                        />
                    </GoogleMap>
                </div>
            </div>
        );
    };
};
