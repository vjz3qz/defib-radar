import MapView from "react-native-maps";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";
import Markers from "../components/Markers";

export default function Map({ onMarkerPress, coordinates }) {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    getCurrentPosition();
  }, []);


  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Location Permission", "Permission to access location was denied");
      console.log("Permission to access location was denied");
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }

  return (
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChange={setRegion}
        showsUserLocation={true}
      >
      
        <Markers onMarkerPress={onMarkerPress} />
      
      {coordinates && (
        <MapView.Polyline
          coordinates={coordinates}
          strokeWidth={4}
          strokeColor="#007AFF"
        />
      )}
        
      </MapView>
  );
}
