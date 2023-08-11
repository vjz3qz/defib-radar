import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

export const useCurrentLocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  useEffect(() => {
    getCurrentPosition().finally(() => setIsLoading(false));
  }, []);

  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Location Permission",
        "Permission to access location was denied"
      );
      console.log("Permission to access location was denied");
      return;
    } else {
      let locationData = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      });
    }
  };

  return { location, locationIsLoading: isLoading };
}