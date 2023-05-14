import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Address } from "cluster";
import React, { useEffect, useState, useRef, use } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

/* -----Text inputfield------------------------------------------------------------- */
interface InputfieldProps {
  id: string;
  labelText: string;
  required: boolean;
  type: "number" | "text" | "email" | "tel";
  onChange: (isValue: string) => void;
}

export const Inputfield = ({id, labelText, required, type, onChange}: InputfieldProps) => {
  const [isValue, setIsValue] = useState<string>("");

  useEffect(() => {
    onChange(isValue);
  }, [isValue]);

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id}>{labelText}</label>
      <input
        className="bg-MainGreen-100 h-10 text-lg p-1 rounded-none border-[1px] focus:border-[3px] border-MainGreen-200 outline-none"
        id={id}
        type={type}
        required={required}
        value={isValue}
        onChange={(event) => setIsValue(event.target.value)}
      />
    </div>
  );
}

/* -----Time and date inputfield---------------------------------------------------- */
interface TimeDateProps {
  id: string;
  labelText: string;
  required: boolean;
  timeChange: (Value: string) => void;
  dateChange: (Value: string) => void;
}

export const TimeDateField = ({id, labelText, required, timeChange, dateChange}: TimeDateProps) => {
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
        <input
          className="bg-MainGreen-100 h-10 mr-5 rounded-none border-[1px] focus:border-[3px] border-MainGreen-200 outline-none"
          id={"Time" + id}
          type="time"
          value={time}
          required={required}
          onChange={(event) => setTime(event.target.value)}
        />

        <input
          className="bg-MainGreen-100 h-10 rounded-none w-32 border-[1px] focus:border-[3px] border-MainGreen-200 outline-none"
          id={"Date" + id}
          type="date"
          value={date}
          required={required}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
    </div>
  );
}

/* -----Yes No checkbox---------------------------------------------------- */
interface YesNoProps {
  id: string;
  labelText: string;
  required: boolean;
  onChange: (checked: boolean) => void;
}

export const YesNo = ({id, labelText, required, onChange}: YesNoProps) => {
  /* 0 is when the checkbox is first initialized and therefor is not filled, 1 is Yes, 2 is No */
  const [checked, setChecked] = useState<0 | 1 | 2>(0);
  const [checkRequired, setCheckRequired] = useState<boolean>();

  useEffect(() => {
    if (required) {
      setCheckRequired(true);
    } else {
      setCheckRequired(false);
    }
  }, []);

  useEffect(() => {
    if (checked === 1) {
      onChange(true);
    } else if (checked === 2) {
      onChange(false);
    }
    if (checked > 0) {
      setCheckRequired(false);
    }
  }, [checked]);

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id}>{labelText}</label>

      {/* Yes */}
      <div id={id} className="flex flex-row items-center">
        <label htmlFor={"Yes" + id} className="mr-2">
          Yes
        </label>
        <input
          className="accent-MainGreen-300 scale-125"
          id={"Yes" + id}
          type="checkbox"
          checked={checked === 1}
          required={checkRequired}
          onChange={() => setChecked(1)}
        />

        {/* No  */}
        <label htmlFor={"No" + id} className="ml-4 mr-2">
          No
        </label>
        <input
          className="accent-MainGreen-300 scale-125"
          id={"No" + id}
          type="checkbox"
          checked={checked === 2}
          required={checkRequired}
          onChange={() => setChecked(2)}
        />
      </div>
    </div>
  );
}


/* ----- TextField ---------------------------------------------------- */
interface TextFieldProps {
  id: string;
  maxLength: number;
  labelText: string;
  required: boolean;
  onChange: (value: string) => void;
}

export const TextField = ({ id, maxLength, labelText, required, onChange }: TextFieldProps) => {

  const [text, setText] = useState<string>("");
  const [currentLength, setCurrentLength] = useState<number>(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    onChange(text);
    setCurrentLength(text.length);
  }, [text]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [text]);

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id}>{labelText}</label>
      <textarea
        ref={textareaRef}
        id={id}
        value={text}
        onChange={(event) => setText(event.target.value)}
        maxLength={maxLength}
        required={required}
        className="min-h-10 h-auto resize-none overflow-hidden outline-none focus:border-[3px] border-[1px] border-MainGreen-200 p-1 bg-MainGreen-100"
      />
      <p>{`${currentLength.toString()}/${maxLength.toString()}`}</p>
    </div>
  );
}


/* ----- ImageField ---------------------------------------------------- */
interface ImageFieldProps {
  id: string;
  required: boolean;
  labelText: string;
}

/* TODO: make picture upload to server when chosen, if a new picture is chosen the old picture need to get deleted */
export const ImageField = ({ required, id, labelText }: ImageFieldProps) => {
  function handleImageUpload(event) {
    /* Upload picture to server */
  }

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id}>{labelText}</label>
      <input
        className=""
        id={id}
        type="file"
        accept="image/*"
        required={required}
        capture="environment"
        onChange={(event) => handleImageUpload(event.target.value)}
      />
    </div>
  );
}


/* ----- Location field ---------------------------------------------------- */
interface LocationFieldProps {
  setLocation: (location: { address: string; position: { lat: number; lng: number } }) => void;
}

export const LocationField = ({ setLocation }: LocationFieldProps) => {
  const [position, setPosition] = useState<{lat:number, lng:number}>({lat: 0, lng: 0});
  const [address, setAddress] = useState<string>("")

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    setLocation({address, position})
  }, [position, address]);

  useEffect(() => {
    (async () => {
      if (address) {
        const results = await getGeocode({ address });
        const newPosition = await getLatLng(results[0]);
        setPosition(newPosition);
      }
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      const results = await getGeocode({ location: position });
      setAddress(results[0].formatted_address);
    })();
  }, [position]);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
      })
    }
    else {
      const country = JSON.parse(sessionStorage.getItem("country"))
      if (country != null) {
        setPosition(country.location)
      }
    }

  }, [])

  if (loadError) {
    return (
      <div>
        <p>Error loading google maps</p>
      </div>
    )
  }
  else if (isLoaded) {
    return ( 
      <div>
        <Inputfield 
        id="addressInput"
        labelText="Enter address of accident or drag the marker on Google maps"
        required={true}
        type="text"
        onChange={setAddress}
        />
        <GoogleMap
        center={position}
        zoom={5}
        mapContainerStyle={{
          height: "100%",
          width: "100%",
        }}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: false,
        }}
        >
          <Marker 
          position={position}
          draggable={true}
          onDragEnd={(event) => setPosition({lat: event.latLng.lat(), lng: event.latLng.lng()})}
          />
        </GoogleMap>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>Loading Google Maps...</p>
      </div>
    )
  }
}
