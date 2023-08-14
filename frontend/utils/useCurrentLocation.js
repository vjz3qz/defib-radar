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
		getCurrentLocation().finally(() => setIsLoading(false));
	}, []);

	const getCurrentLocation = async () => {
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
			lat = locationData.coords.latitude;
			lng = locationData.coords.longitude;
			setLocation({
				latitude: lat,
				longitude: lng,
			});
			return { lat, lng };
		}
	};

	return { location, getCurrentLocation, locationIsLoading: isLoading };
};

// async await some time intensive function
// print "done"
