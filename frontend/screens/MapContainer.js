import React, { useState, useEffect } from "react";
import { View } from "react-native";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { useRoute } from "../utils/useRoute";
import { useCurrentLocation } from "../utils/useCurrentLocation";
import Directions from "../components/Directions";

export default function MapContainer() {
	const { getCurrentLocation } = useCurrentLocation();
	const { routeDetails, getRouteDetails } = useRoute();

	const [selectedMarkerData, setSelectedMarkerData] = useState(null);
	const [cardOpen, setCardOpen] = useState(false);
	const [showDirections, setShowDirections] = useState(false);

	const handleMarkerPress = (marker) => {
		setSelectedMarkerData(marker);
		setCardOpen(true);
	};

	const handleButtonPress = async (walking, endLat, endLng) => {
		const { lat, lng } = await getCurrentLocation();
		await getRouteDetails(walking, lat, lng, endLat, endLng);
		setShowDirections(true);
		setCardOpen(false);
	};

	return (
		<View style={{ flex: 1 }}>
			<Map
				onMarkerPress={showDirections ? null : handleMarkerPress}
				coordinates={
					showDirections && routeDetails ? routeDetails.coordinates : null
				}
			/>
			{cardOpen && (
				<View style={styles.infoCardContainer}>
					<InfoCard
						data={selectedMarkerData}
						handleButtonPress={handleButtonPress}
						handleXPress={() => setCardOpen(false)}
					/>
				</View>
			)}
			{showDirections && (
				<View style={styles.directionsContainer}>
					<Directions
						directions={
							showDirections && routeDetails && routeDetails.directions ? routeDetails.directions : null
						}
						handleXPress={() => setShowDirections(false)}
					/>
				</View>
			)}
		</View>
	);
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	mapContainer: {
		flex: 1,
	},
	infoCardContainer: {
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
		padding: 10,
		margin: 10,
	},
	directionsContainer: {
		position: "absolute",
		top: 5,
		left: 0,
		right: 0,
		padding: 10,
		margin: 10,
	},
});
