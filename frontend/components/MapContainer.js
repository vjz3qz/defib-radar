import MapView from "react-native-maps"; // <-- import the MapView component
export default function MapContainer() {
	return (
		<MapView
			style={{ flex: 1 }}
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
		/>
	);
}
