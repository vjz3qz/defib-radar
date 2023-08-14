import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapContainer from "./screens/MapContainer";
import LoadingScreen from "./screens/LoadingScreen";
import { useMarkers } from "./utils/useMarkers";
import { useCurrentLocation } from "./utils/useCurrentLocation";

export default function Appn() {
	const { locationIsLoading } = useCurrentLocation();
	const { markersIsLoading } = useMarkers();

	return locationIsLoading || markersIsLoading ? (
		<LoadingScreen />
	) : (
		<View style={styles.container}>
			<MapContainer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
