import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapContainer from "./screens/MapContainer";
import LoadingScreen from "./screens/LoadingScreen";
import { LocationProvider } from "./contexts/LocationContexts";
import { useCurrentLocation } from "./utils/useCurrentLocation";
import { useMarkers } from "./utils/useMarkers";

export default function App() {
  const { location, locationIsLoading } = useCurrentLocation();
  const { markers, markersIsLoading } = useMarkers();
  
  return locationIsLoading || markersIsLoading ? (
    <LoadingScreen />
  ) : (
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
