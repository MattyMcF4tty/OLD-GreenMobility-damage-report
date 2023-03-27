import React, {useState, useEffect} from "react";
import { useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api";

function AccidentLocationMap() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    const [accidentLocation, setAccidentLocation] = useState({lat: 48.8684, lng: 2.2945});
    const [accidentAddress, setAccidentAddress] = useState({});

    useEffect(() => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setAccidentLocation({ lat: latitude, lng: longitude });
            })
        }
    }, []);


    const geocodeLatLng = (latlng) => {
        const geocoder = new window.google.maps.Geocoder();
    
        geocoder
          .geocode({ location: latlng })
          .then((response) => {
            if (response.results[0]) {
              setAccidentAddress(response.results[0].formatted_address);
            } else {
              setAccidentAddress("");
            }
          })
          .catch((e) => {
            console.log("Geocoder failed due to: " + e);
            setAccidentAddress("");
        });
    };
    
    useEffect(() => {
        geocodeLatLng(accidentLocation);
    }, [accidentLocation]);


    if (!isLoaded) {
        return (
            <p>Loading Google maps...</p>
        )
    }

    return (
        <div>
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
            </GoogleMap>
            <p>{accidentAddress}</p>
        </div>
    );
};

export default AccidentLocationMap;