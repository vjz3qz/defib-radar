import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "../utils/useRoute";

const Directions = () => {
	const { routeDetails, getRouteDetails } = useRoute();

	if (
		!routeDetails ||
		!routeDetails.directions ||
		routeDetails.directions.length === 0
	) {
		return (
			<View style={styles.loadingContainer}>
				<Text>Loading directions...</Text>
			</View>
		);
	}

	return (
		<View>
			<Text>Test</Text>
			<Text style={styles.header}>Directions:</Text>
			<FlatList
				data={routeDetails.directions}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.directionItem}>
						<Text style={styles.maneuver}>Maneuver: {item.maneuver}</Text>
						<Text>Instruction: {item.instruction}</Text>
						<Text>Distance: {item.distance}</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		padding: 10,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	loadingContainer: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 10,
	},
	directionItem: {
		marginBottom: 5,
	},
	maneuver: {
		fontWeight: "bold",
	},
});

export default Directions;
