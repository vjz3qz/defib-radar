import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { View } from "react-native";
import InfoCard from "./InfoCard";
import axios from "axios";

export default function MapContainer() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
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
    fetchMarkers();
    getCurrentPosition();
  }, []);

  const fetchMarkers = async () => {
    try {
      const response = await axios.get(
        process.env.BACKEND_URL
      );
      setMarkers(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Location Permission", "Permission to access location was denied");
      console.log("Permission to access location was denied");
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }

  function Markers() {
    return markers.map((marker, index) => (
      <Marker
        key={marker.id || index}
        coordinate={marker.latlng}
        title={marker.title}
        description={marker.description}
        onPress={() => {
          setSelectedMarkerData(marker);
          setCardOpen(true);
        }}
      />
    ));
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChange={setRegion}
        showsUserLocation={true}
      >
        <Markers />
      </MapView>
      {cardOpen && <InfoCard data={selectedMarkerData} />}
    </View>
  );
}
