import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapContainer from "./screens/MapContainer";
import { LocationProvider } from "./contexts/LocationContexts";


export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<LocationProvider>
				<MapContainer />
			</LocationProvider>
		</SafeAreaView>
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
