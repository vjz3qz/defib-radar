import MapView, { Polyline } from "react-native-maps";
import React, { useState, useEffect } from "react";
import Markers from "../components/Markers";
import { useCurrentLocation } from "../utils/useCurrentLocation";

export default function Map({ onMarkerPress, coordinates }) {
  const { location } = useCurrentLocation();
  const [region, setRegion] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitude: location.latitude,
      longitude: location.longitude
    }));
}, [location]);

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChange={setRegion}
      showsUserLocation={true}
    >
      <Markers onMarkerPress={onMarkerPress} />

      {coordinates && (
        <Polyline
          coordinates={coordinates}
          strokeWidth={4}
          strokeColor="#007AFF"
        />
      )}
    </MapView>
  );
}
