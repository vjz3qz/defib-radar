import { React, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRoute } from "../utils/useRoute";

const Directions = () => {
	// const { routeDetails, getRouteDetails } = useRoute();

	const [directionIndex, setDirectionIndex] = useState(0);

	const handleNextClick = () => {
		setDirectionIndex((prevIndex) => prevIndex + 1);
	};

	// mock data for testing
	routeDetails = {
		directions: [
			{
				maneuver: "turn-left",
				instruction: "Turn left at Main St.",
				distance: "0.5 miles",
			},
			{
				maneuver: "turn-right",
				instruction: "Turn right at Elm St.",
				distance: "1.2 miles",
			},
			{
				maneuver: "merge",
				instruction: "Merge onto Highway 50 via the ramp on the right.",
				distance: "5.3 miles",
			},
			{
				maneuver: "destination",
				instruction: "Your destination is on the right.",
				distance: "0.2 miles",
			},
		],
	};

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
	} else if (directionIndex < routeDetails.directions.length) {
		const currentDirection = routeDetails.directions[directionIndex];
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Directions:</Text>
				<View style={styles.directionItem}>
					<Text style={styles.maneuver}>
						Maneuver: {currentDirection.maneuver}
					</Text>
					<Text>Instruction: {currentDirection.instruction}</Text>
					<Text>Distance: {currentDirection.distance}</Text>
				</View>
				<Button title="Next" onPress={handleNextClick} />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Text>You've reached your destination</Text>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		padding: 10,
		height: 120,
		borderRadius: 10,
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
