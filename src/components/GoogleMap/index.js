import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polygon } from "google-maps-react";

const googleMapsApiKey = "AIzaSyCAOi56gyn5pstOqZJvYT_GjQf007-kbkU";

const MapContainer = (props) => {
  console.log(props);
  const { setAddress, google, getCurrentPosition } = props;
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [map, setMap] = useState(null);
  const [highlightedCityCoordinates, setHighlightedCityCoordinates] = useState([]);

  const getAdress = async () => {
    const { lat, lng } = position;
    console.log(position);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleMapsApiKey}`
      );
      const data = await response.json();
      setAddress(data.results[0].formatted_address);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleMapClick = async (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setPosition({ lat, lng });
    setMap(map);

    // Example: Create a simple rectangle around the clicked point
    const rectangleCoordinates = [
      { lat: lat + 0.1, lng: lng + 0.1 },
      { lat: lat + 0.1, lng: lng - 0.1 },
      { lat: lat - 0.1, lng: lng - 0.1 },
      { lat: lat - 0.1, lng: lng + 0.1 },
    ];

    setHighlightedCityCoordinates(rectangleCoordinates);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, [getCurrentPosition]);

  useEffect(() => {
    getAdress();
  }, [position.lat, position.lng]);

  // useEffect(() => {
  //   if (map && position.lat !== 0 && position.lng !== 0) {
  //     const bounds = new google.maps.LatLngBounds();
  //     bounds.extend(new google.maps.LatLng(position.lat, position.lng));
  //     map.fitBounds(bounds);
  //   }
  // }, [map, position.lat, position.lng]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "650px",
        overflow: "hidden",
        border: "1px solid #9A9FB0",
        borderRadius: "10px",
      }}
    >
      <Map
        google={google}
        zoom={5}
        initialCenter={position}
        center={position}
        onClick={handleMapClick}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* <Marker position={position} /> */}
        {highlightedCityCoordinates.length > 0 && (
          <Polygon
            paths={highlightedCityCoordinates}
            strokeColor="#00FF00"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#00FF00"
            fillOpacity={0.35}
          />
        )}
      </Map>
    </div>
  );
};
const LoadingContainer = () => <>loading</>;

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey,
  LoadingContainer: LoadingContainer,
})(MapContainer);
