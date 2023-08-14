import MapView, { Polyline } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native"; // Ensure to import these
import Markers from "../components/Markers";
import { useCurrentLocation } from "../utils/useCurrentLocation";

export default function Map({ onMarkerPress, coordinates }) {
	const { location, getCurrentLocation } = useCurrentLocation();
	const [region, setRegion] = useState({
		latitude: location.latitude,
		longitude: location.longitude,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	useEffect(() => {
		setRegion((prevRegion) => ({
			...prevRegion,
			latitude: location.latitude,
			longitude: location.longitude,
		}));
	}, [location]);

	const handleRecenter = async () => {
		const { lat, lng } = await getCurrentLocation();
		setRegion({
			latitude: lat,
			longitude: lng,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		});
	};

	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={{ flex: 1 }}
				region={region}
				onRegionChangeComplete={setRegion}
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

			<View style={styles.recenterButton}>
				<Button title="Re-center" onPress={handleRecenter} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	recenterButton: {
		position: "absolute",
		bottom: 10,
		right: 10,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 5,
	},
});
