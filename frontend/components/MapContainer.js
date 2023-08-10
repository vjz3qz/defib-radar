import MapView from "react-native-maps"; // <-- import the MapView component
import { StyleSheet } from "react-native";

function MapContainer() {
	return (
		<MapView
			style={styles.mapContainer}
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	mapContainer: {
		flex: 1,
	},
});

export default MapContainer;
