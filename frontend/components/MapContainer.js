import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { View } from "react-native";
import InfoCard from "./InfoCard";
import axios from 'axios';

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

  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null);

  //FETCH MARKER DATA FROM BACKEND
  useEffect(() => {
    axios.get("url/for/markers")
      .then((response) => setMarkers(response.data))
      .catch((error) => console.log('Error fetching data:', error))
  },[]);
  
  const [markers, setMarkers] = useState([
    {
      title: "Apple",
      description:
        "Apple Park is Apple's corporate headquarters located in Cupertino, California, United States.",
      latlng: {
        latitude: 37.330928,
        longitude: -122.007866,
      },
    },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync({});
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
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
    <View style={{ flex: 1 }}>
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
            onPress={() => {
              setSelectedMarkerData(marker);
              setCardOpen(true);
            }}
          />
        ))}
      </MapView>
      {cardOpen && <InfoCard data={selectedMarkerData} />}
    </View>
  );
}
