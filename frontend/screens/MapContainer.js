import React, { useState } from "react";
import { View } from "react-native";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { useRoute } from "../utils/useRoute";
import { useCurrentLocation } from "../utils/useCurrentLocation";

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
    {/* {showDirections && routeDetails.directions} create a Directions.js to display. also a way to exit showing directions, show eta/time left below? */}
      <Map
        onMarkerPress={handleMarkerPress}
        coordinates={
          showDirections && routeDetails ? routeDetails.coordinates : null
        }
      />
      {cardOpen && (
        <InfoCard
          data={selectedMarkerData}
          handleButtonPress={handleButtonPress}
        />
      )}
    </View>
  );
}
