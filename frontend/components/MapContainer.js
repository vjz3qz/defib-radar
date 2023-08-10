
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';


export default function MapContainer() {
  const initialLatitude = 37.78825;
  const initialLongitude = -122.4324;

  const [region, setRegion] = useState({
    latitude: initialLatitude,
    longitude: initialLongitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const onRegionChange = (region) => {
    setRegion(region);
  };

  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([
    {
      title: "hello",
      description: "hello",
      latlng: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
  ]);

  useEffect(() => {
	(async () => {
		let { status } = await Location.requestForegroundPermissionsAsync({});
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		}

		let location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
	})();
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
	  region={region}
	  onRegionChange={onRegionChange}
	  showsUserLocation={true}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
}
