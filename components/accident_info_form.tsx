import { GoogleMap } from "@react-google-maps/api";
import React, {useState, useEffect} from "react";

function AccidentInfoForm() {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        });
      }
    }, []);


    const mapStyle = {
        width: "100%",
        height: "400px", 
    };

    return (
        <div>
            
            <GoogleMap
            mapContainerStyle={mapStyle}
            center={center}
            zoom={10}
            ></GoogleMap>

        </div>
    );
};

export default AccidentInfoForm;